# Bloom Studios Nails 2.2 - Fresh Start Sync
function Sync-GitHub {
    Write-Host "🔄 Sincronizando novo projeto Bloom Deluxe..." -ForegroundColor Cyan
    git add .
    $message = "Fresh Start: Bloom Studios Nails 2.2 - Official Direction Implementation"
    git commit -m $message
    git push origin master
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ GitHub atualizado com a nova Identidade Visual Oficial!" -ForegroundColor Green
    } else {
        Write-Host "⚠️ Remote 'origin' no encontrado ou erro no push. Configure o remote para automatizar." -ForegroundColor Yellow
    }
}
Sync-GitHub
