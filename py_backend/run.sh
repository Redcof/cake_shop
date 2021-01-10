BACKEND_PATH=$(pwd)


source "$BACKEND_PATH/cake_shop_venv/bin/activate"

export FLASK_APP="$BACKEND_PATH/main.py"
export FLASK_DEBUG=1
export FLASK_ENV=development
# if you are planning to change this port, go ahead and
# please change cake_shop/package.json > "proxy": "http://localhost:5000"
export FLASK_RUN_PORT=5000

python -m flask run
deactivate