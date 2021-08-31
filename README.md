git rm -r --cached .
sudo lerna add commander --scope=miguelcli --dev

npm config set proxy=socks5h://127.0.0.1:51888
lerna bootstrap

http://npm.devops.erp.ocj.com.cn/