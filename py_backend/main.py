from flask import Flask, render_template
import os
import random

# dir_path = os.path.dirname(os.path.realpath(__file__))
# parent_dir = os.path.abspath(os.path.join(dir_path, os.pardir))


# template_path = f"{parent_dir}/build"
# static_path = f"{parent_dir}/build"
# print("###############")
# print(f"template_path - {template_path}", static_path)

app = Flask(__name__)


@app.route('/time')
def hello_world():
    return {"time": random.random()}
