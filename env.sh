function check() {
    echo "> Checking if dependency programs exists:"
    echo
    if which node >/dev/null; then
        echo "- $fg[green]node$reset_color"
        node -v
    else
        echo "- $fg[red]node$reset_color"
    fi
    if which nvm >/dev/null; then
        echo "- $fg[green]nvm$reset_color"
        nvm --version
    else
        echo "- $fg[red]nvm$reset_color"
    fi
    if which yarn >/dev/null; then
        echo "- $fg[green]yarn$reset_color"
        yarn -v
    else
        echo "- $fg[red]yarn$reset_color"
    fi
}
function init() {
    nvm use
    yarn
}
function reset() {
    rm -rf node_modules; rm -rf .cache;
    init
}
function clean() {
    nvm use
    yarn clean
}
function build() {
    nvm use
    yarn build
}
function serve() {
    nvm use
    yarn start
}
function format() { 
    yarn format
}
function lint() { 
    yarn lint
}
function test() {
    nvm use
    yarn test
}
function deploy() {
    nvm use default
    #now secrets add github_token ""
    #now secrets add mc_endpoint ""
    #now secret add gatsby_formik_endpoint ""
    now secrets ls
    now --prod
}
echo
echo "‘check’       - Check Dependecies"
echo "‘init’        - Init"
echo "‘reset’       - Reset"
echo
echo "‘clean’       - Clean"
echo "‘build’       - Build static files"
echo "‘serve’       - Serve website"
echo
echo "‘format’      - Format"
echo "‘lint’        - Lint"
echo "‘test’        - Test"
echo "‘deploy’      - Deploy"