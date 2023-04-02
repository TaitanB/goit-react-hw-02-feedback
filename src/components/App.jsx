import { Component } from 'react';
import { FeedbacksAdd } from '../components/Buttons/Buttons';
import { Statistics } from '../components/Statistics/Statistics';
import { Wrapper } from '../components/Wrapper.styled';
import { Notification } from '../components/Notification/Notification';
import { Section } from '../components/Section/Section';

export class App extends Component {
  static defaultProps = {
    initValue: 0,
  };

  state = {
    good: this.props.initValue,
    neutral: this.props.initValue,
    bad: this.props.initValue,
  };

  onAddFeedback = value => {
    console.log(value);
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => {
      return (acc += value);
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() > 0
      ? `${Math.round((this.state.good / this.countTotalFeedback()) * 100)}%`
      : `0%`;
  };

  render() {
    const names = Object.keys(this.state);
    const stats = this.state;
    const total = this.countTotalFeedback();
    const positivePerc = this.countPositiveFeedbackPercentage();

    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbacksAdd onAddFeedback={this.onAddFeedback} options={names} />
        </Section>

        {total ? (
          <Section title="Statistics">
            <Statistics
              stats={stats}
              total={total}
              positivePerc={positivePerc}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Wrapper>
    );
  }
}
