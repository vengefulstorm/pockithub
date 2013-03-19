from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound


render_section = Blueprint('render_section', __name__, template_folder='templates')


@render_section.route('/<user>', methods=['GET'])
@render_section.route('/<user>/<repo>', methods=['GET']) #route to code section by default
@render_section.route('/<user>/<repo>/<section>', methods=['GET'])
#@render_section.route('/<user>/<repo>/<section>/<item_id>', methods=['GET']) 
def show(user=None, repo=None, section=None):
        try:
            return render_template('index.html', user=user, repo=repo, section=section)
        except TemplateNotFound:
            abort(404)
