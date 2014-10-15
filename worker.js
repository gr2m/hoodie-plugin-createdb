module.exports = function (hoodie, callback) {
	
	console.log('createdb worker initialized')
	hoodie.task.on('createdb:add', function(dbName, createDbTask) {
		console.log('NEW TASK!')
		console.log(createDbTask)

		hoodie.database.add(createDbTask.secretId, function(error) {
			if (error) {
				hoodie.task.error(dbName, createDbTask);
			} else {
				hoodie.task.success(dbName, createDbTask);
			}

			callback();
		})
	});
};
