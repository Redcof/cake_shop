BACKEND_PATH=$(pwd)


source "$BACKEND_PATH/cake_shop_venv/bin/activate"

export FLASK_APP="$BACKEND_PATH/main.py"
export FLASK_DEBUG=1
export FLASK_ENV=development
export FLASK_RUN_PORT=5000

python -m flask run
deactivate