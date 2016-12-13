from bottle import route, run
import json

@route('/api/v1/users')
def users():
	data = {
		'users' :	[
			{	'name': 'admin1',
                'id': 1,
				'role': 'Admin'
			},
			{	'name': 'admin2',
                'id': 2,
				'url': 'Employee'
			},
            {   'name': 'admin3',
                'id': 3,
                'url': 'Employee'
            }
		]
	}

	return json.dumps(data)

run(host='localhost', port=8080)
