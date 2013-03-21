from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound
import PH_common


render_section = Blueprint('render_section', __name__, template_folder='templates')


@render_section.route('/<user>', methods=['GET'])
@render_section.route('/<user>/<repo>', methods=['GET']) #route to code section by default
@render_section.route('/<user>/<repo>/tree/<branch>', methods=['GET'])
@render_section.route('/<user>/<repo>/<section>', methods=['GET'])
#@render_section.route('/<user>/<repo>/<section>/<item_id>', methods=['GET']) 
def show(user=None, repo=None, section=None, branch=None):
        try:
            temp_url = '/'
	    if (user != None):
                temp_url = temp_url + user;
	    if (repo != None):
                temp_url = temp_url + '/' + repo;
	    if (branch != None):
                temp_url = temp_url + '/tree/' + branch;
	    else:
                branch = 'master';
	    if (section != None):
                temp_url = temp_url + '/' + section;
            return render_template('index.html', user=user, repo=repo, section=section, branch=branch, public_token=PH_common.PAT, gen_url=temp_url)
        except TemplateNotFound:
            abort(404)


@render_section.route('/<user>/<repo>/issues/milestones', methods=['GET'])
def show_milestones(user=None, repo=None):
        try:
            temp_url = '/'
	    if (user != None):
                temp_url = temp_url + user;
	    if (repo != None):
                temp_url = temp_url + '/' + repo;
	    temp_url += '/issues/milestones';
            return render_template('index.html', user=user, repo=repo, section='milestones', public_token=PH_common.PAT, gen_url=temp_url)
        except TemplateNotFound:
            abort(404)
