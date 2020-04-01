import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Question from '../../components/Age/Question';
import UnderAge from '../../components/Age/UnderAge';

/**
* Age
* This component shows the formular age question, if the answer is negative
* then the component underAge is shown.
* If the answer is positive then it will redirect to the page signUp
* Props
* @param history
*/
export default class AgePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      underAge: false,
    };
  }

  render() {
    const { underAge } = this.state;
    if (underAge) {
      return (
        <UnderAge onPressBack={() => { this.setState({ underAge: false }); }} />
      );
    }
    return (
      <Question
        onPressNo={() => this.setState({ underAge: true })}
        onPressYes={() => this.props.history.push('/signUp')}
      />
    );
  }
}

AgePage.propTypes = {
  history: PropTypes.objectOf(Object),
};
