module.exports = class UserDto {
    constructor(model) {
        this.id = model.id
        this.username = model.username
    }
}