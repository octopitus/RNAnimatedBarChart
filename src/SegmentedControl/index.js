/* @flow */
import React, {Component} from 'react'
import {View, Text, TouchableWithoutFeedback} from 'react-native'

import styles from './styles'

type DefaultProps = {
  onChange: (value: *) => void
};

type Props = DefaultProps & {
  labels: Array<string>,
  values: Array<*>,
  selected: *,
  contentContainerStyle?: any
};

class SegmentedControl extends Component<DefaultProps, Props, void> {
  static defaultProps = {
    onChange: () => {}
  }

  render() {
    const {labels, values, selected} = this.props

    return (
      <View style={[styles.container, this.props.contentContainerStyle]}>
        {values.map((value, index) =>
          <TouchableWithoutFeedback key={value} onPress={() => this.props.onChange(value)}>
            <View style={[styles.item, value === selected && styles.selected]}>
              <Text style={[styles.text, value === selected && styles.selectedText]}>{labels[index]}</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    )
  }
}

export default SegmentedControl
