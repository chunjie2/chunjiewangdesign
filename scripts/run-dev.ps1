$env:Path = "C:\Program Files\nodejs;$env:Path"
Set-Location (Split-Path -Parent $PSScriptRoot)
& "C:\Program Files\nodejs\node.exe" ".\node_modules\next\dist\bin\next" dev -H 127.0.0.1 -p 3000
