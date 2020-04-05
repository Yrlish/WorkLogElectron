import React from 'react';
import { Form } from 'semantic-ui-react';
import { InputOnChangeData } from 'semantic-ui-react/dist/commonjs/elements/Input/Input';
import ValidationStatus from '../../models/ValidationStatus';
import { DATE_REGEX } from '../../constants/regex';

interface Props {
  dateCallback: (date: string) => void;
}

interface State {
  date: string;
  dateClass: string;
  dateValidation: ValidationStatus;
}

export default class DateFormInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      date: '',
      dateClass: '',
      dateValidation: ValidationStatus.EMPTY
    };

    this.onDateChange = this.onDateChange.bind(this);
  }

  private onDateChange(...args: [any, InputOnChangeData]) {
    const [, data] = args;
    const { value } = data;

    if (value !== '') {
      if (!DATE_REGEX.test(value)) {
        this.setState({
          date: '',
          dateValidation: ValidationStatus.INVALID,
          dateClass: 'error'
        });
      } else {
        this.setState({
          date: value,
          dateValidation: ValidationStatus.VALID,
          dateClass: ''
        });
      }
    } else {
      this.setState({
        date: value,
        dateValidation: ValidationStatus.EMPTY,
        dateClass: ''
      });
    }

    this.props.dateCallback(this.state.date);
  }

  render() {
    return (
      <Form.Input
        fluid
        label="Date"
        placeholder="YYYY-MM-DD"
        required
        onChange={this.onDateChange}
        className={this.state.dateClass}
      />
    );
  }
}
