# Bloom Studios Nails - Git Sync Automation
function Sync-GitHub {
    Write-Host "🔄 Sincronizando alterações da Bloom Deluxe..." -ForegroundColor Cyan
    git add .
    $message = "Update: Bloom Studios Nails - Design Refinements & strategic CTAs"
    git commit -m $message
    git push origin main
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ GitHub atualizado com sucesso!" -ForegroundColor Green
    } else {
        Write-Host "⚠️ Erro ao sincronizar. Verifique a conexão ou as configurações do remote." -ForegroundColor Yellow
    }
}
Sync-GitHub
