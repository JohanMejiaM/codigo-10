export class TaskClass {
	constructor(_name, _status, _id = null, _createdAt = null) {
		if (_name !== null) this.name = _name;
		if (_status !== null) this.status = _status;
		if (_id !== null) this.id = _id;
		if (_createdAt !== null) this.createdAt = new Date(_createdAt);
	}
}
