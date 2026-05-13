-- SCRIPT DE CONFIGURAÇÃO DO BANCO DE DATAS - BLOOM STUDIO NAILS

-- 1. Tabela de Agendamentos (Appointments)
CREATE TABLE IF NOT EXISTS appointments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT now(),
    client_name TEXT NOT NULL,
    client_whatsapp TEXT NOT NULL,
    service TEXT NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    status TEXT DEFAULT 'pendente', -- pendente, confirmado, cancelado, concluido
    notes TEXT
);

-- 2. Tabela de Galeria (Gallery)
CREATE TABLE IF NOT EXISTS gallery (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT now(),
    image_url TEXT NOT NULL,
    title TEXT,
    is_active BOOLEAN DEFAULT true
);

-- 3. Tabela de Serviços (Opcional - para tornar o menu dinâmico no futuro)
CREATE TABLE IF NOT EXISTS services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT now(),
    title TEXT NOT NULL,
    description TEXT,
    price TEXT,
    duration TEXT
);

-- 4. Habilitar Realtime para agendamentos (para o Admin ver atualizações ao vivo)
ALTER PUBLICATION supabase_realtime ADD TABLE appointments;

-- 5. Configurar Políticas de Segurança (RLS)
-- Nota: Para simplificar o início, vamos permitir inserções públicas em agendamentos
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Permitir agendamentos públicos" ON appointments FOR INSERT WITH CHECK (true);
CREATE POLICY "Permitir leitura apenas para Admin autenticado" ON appointments FOR SELECT USING (auth.role() = 'authenticated');

ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Leitura pública da galeria" ON gallery FOR SELECT USING (true);
CREATE POLICY "Admin gerencia galeria" ON gallery ALL USING (auth.role() = 'authenticated');

-- 6. Inserir alguns serviços base (opcional)
INSERT INTO services (title, description, duration) VALUES 
('Alongamento em Gel', 'Unhas longas e resistentes com acabamento impecável.', '2h 30min'),
('Banho em Gel', 'Fortalecimento e brilho para suas unhas naturais.', '1h 30min'),
('Nail Art', 'Design artístico exclusivo feito à mão.', '30min - 1h');
