export class User {
    private _id: String;
    private _email: String;
    private _password: String;
    private _lastName: String;
    private _firstName: String;

    private constructor(id: String, email: String, password: String, lastName: String, firstName: String) {
        this._id = id;
        this._email = email;
        this._password = password;
        this._lastName = lastName;
        this._firstName = firstName;
    }

    public static builder(): UserBuilder {
        return new User.UserBuilder();
    }

    public getId() {
        return this._id;
    }

    public getEmail() {
        return this._email;
    }

    public getPassword() {
        return this._password;
    }

    public getLastName() {
        return this._lastName;
    }

    public getFirstName(): String {
        return this._firstName;
    }

    public toString(): String {
        return "User{" +
            "id='" + this._id + '\'' +
            ", email='" + this._email + '\'' +
            ", password='" + this._password + '\'' +
            ", lastName='" + this._lastName + '\'' +
            ", firstName='" + this._firstName + '\'' +
            '}';
    }

    static UserBuilder = class {
        private _id!: String;
        private _email!: String;
        private _password!: String;
        private _lastName!: String;
        private _firstName!: String;

        public constructor() {
        }

        public id(id: String): UserBuilder {
            this._id = id;
            return this;
        }

        public email(email: String): UserBuilder {
            this._email = email;
            return this;
        }

        public password(password: String): UserBuilder {
            this._password = password;
            return this;
        }

        public lastName(lastName: String): UserBuilder {
            this._lastName = lastName;
            return this;
        }

        public firstName(firstName: String): UserBuilder {
            this._firstName = firstName;
            return this;
        }

        public build(): User {
            return new User(this._id, this._email, this._password, this._lastName, this._firstName);
        }
    }
}

//the following code is a workaround to define the inner class types in TypeScript
//Please refer to their documentation concerning this topic
//https://www.typescriptlang.org/play/?ssl=13&ssc=44&pln=12&pc=1#code/LYewJgrgNgpgBAdRAJwNYENkggOzARjgG8BYAKDkrgGMp0BneuAeQgBcZljzyq+56bdGwCW1OAEkcOTnAC8NOo24V+akTikzkALjg4IwAEadeauAF8A3D1VrqIHIOQRqbFAAoADhCNQxcBraeqwcyFqcAJTElmaUFrZ8APRJcABKAKIAsswAahkh7JwAdBFcIkw4IGxwyDAOAOY4IgBeMGBwDJ1wbACeXjAANAIgPQAWFXAA7igYWLgdkzLt7XFwsDVBnFKC6DjU8AoyUyxFyKXSnB6RNnY9-fCh25dcCn0DIABmgS87QvswW6JKgpOAAZQG1DWGzg2DChCOMBOT2QHiIPzKegAzJYbsDKDC4c9tPJ9EjTmELtprrc+ISzgAmUnHClXInhF54sgJMjkUCQWCIWaYbB4JmkO60BhMFEqcw0RzOVzuVE+PwBLa6VnnMrRdE8vg8tagtLtVztBVgeB1dBgdBGET+PrDKo1WgwTDTMa9bo4dDAGD0LzoA6BSr1QP0TA+lDG1JsMbCQJsADkTHoImA0GEGganRwPxJUuUaz9AaDIceZzl5hgAA8vCg3UomGUa-LKBpMfpDCZkGtDbSqEa7qCIfVoTAauyEWTkWc0RiXtjcUC7vSwm3EfPKWUaZPp4zmeSUR52brbhYgA
let innerInstance = new User.UserBuilder();
type UserBuilder = typeof innerInstance;