import React from 'react';
import { connect } from 'react-redux';
import { createUser, showAlert } from '../redux/actions';
import { Alert } from './Alert';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      name: '',
      surname: '',
      desc: '',
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { name, surname, desc } = this.state;

    if (!name.trim()) {
      //title
      return this.props.showAlert('Данные поля не могут быть пустые');
    }

    const newUser = {
      name,
      surname,
      desc,
      id: Date.now().toString(),
    };

    this.props.createUser(newUser);
    this.setState({ name: '', surname: '', desc: '' });

    try {
      return (
        fetch('http://77.120.241.80:8811/api/users', {
          method: 'POST',
          body: JSON.stringify(newUser),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => response.json()),
        console.log('Пользователь успешно создан')
      );
    } catch (e) {
      console.log('Ошибка, что то пошло не так');
    }
  };

  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <div>
        <h1 className="text-center title">Создать пользователя</h1>
        <div className="row">
          <div className="col">
            <form onSubmit={this.submitHandler}>
              {this.props.alert && <Alert text={this.props.alert} />}

              <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={this.state.name}
                  name="name"
                  onChange={this.changeInputHandler}
                />
              </div>

              <div className="form-group">
                <label htmlFor="surname">Фамилия</label>
                <input
                  type="text"
                  className="form-control"
                  id="surname"
                  value={this.state.surname}
                  name="surname"
                  onChange={this.changeInputHandler}
                />
              </div>

              <div className="form-group">
                <label htmlFor="desc">Описание</label>
                <input
                  type="text"
                  className="form-control"
                  id="desc"
                  value={this.state.desc}
                  name="desc"
                  onChange={this.changeInputHandler}
                />
              </div>
              <button className="btn btn-success" type="submit">
                Создать
              </button>
            </form>
            </div>
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createUser,
  showAlert,
};

const mapStateToPtops = (state) => ({
  alert: state.app.alert,
});

export default connect(mapStateToPtops, mapDispatchToProps)(UserForm);
