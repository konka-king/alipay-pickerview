import { Component } from "react";
import {
  View,
  Text,
  PickerView,
  PickerViewColumn,
  Input,
  Button,
} from "@tarojs/components";
import "./index.scss";
import Taro from "@tarojs/taro";

export default class Index extends Component {
  state = {
    list: ["春", "夏", "秋", "东"],
    value: [0, 0],
  };
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { list, value } = this.state;
    return (
      <View className="index">
        <Text>Hello world!</Text>

        <PickerView
          // value={value}
          className=""
          indicatorClass="indicator"
          onChange={(e) => {
            console.log(e.detail.value);
            const v = e.detail.value;

            if (v[0] === 1) {
              this.setState({ list: ["的"] });
            } else if (v[0] === 2) {
              this.setState({ list: ["啊"] });
            } else if (v[0] === 0) {
              this.setState({ list: ["春", "夏", "秋", "东"] });
            } else {
              this.setState({ value: v });
            }
          }}
        >
          <PickerViewColumn>
            <View className="picker-line">1</View>
            <View className="picker-line">2</View>
            <View className="picker-line">3</View>
            <View className="picker-line">4</View>
            <View className="picker-line">5</View>
          </PickerViewColumn>
          <PickerViewColumn>
            {list.map((i) => {
              return (
                <View className="picker-line" key={i + Date.now()}>
                  {i}
                </View>
              );
            })}
          </PickerViewColumn>
        </PickerView>

        <Input className="input"></Input>
        <Button
          className="fix"
          onClick={() => {
            Taro.scanCode({
              success: function (res) {
                console.log(res);
              },
            });
          }}
        >
          按钮
        </Button>
      </View>
    );
  }
}
