import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import Button from './src/components/Button'
import Display from './src/components/Display'

export default function App() {
  state = {
    displayValue: '0',
  }

  addDigit = n => {
    this.setState({displayValue: n})
  }

  clearMemory = () => {
    this.setState({displayValue: '0'});
  }

  setOperation = operation => {

  }


  return (
    <SafeAreaView style={styles.container}>
      <Display value={this.state.displayValue}/>
      <SafeAreaView style={styles.button}>
        <Button label='AC' triple onCLick={this.clearMemory}/>
        <Button label='/' operation onCLick={() => this.setOperation('/')}/>
        <Button label='7' onCLick={() => this.addDigit(7)}/>
        <Button label='8' onCLick={() => this.addDigit(7)}/>
        <Button label='9' onCLick={() => this.addDigit(9)}/>
        <Button label='*' operation onCLick={() => this.setOperation('*')}/>
        <Button label='4' onCLick={() => this.addDigit(4)}/>
        <Button label='5' onCLick={() => this.addDigit(5)}/>
        <Button label='6' onCLick={() => this.addDigit(6)}/>
        <Button label='-' operation onCLick={() => this.setOperation('-')}/>
        <Button label='1' onCLick={() => this.addDigit(1)}/>
        <Button label='2' onCLick={() => this.addDigit(2)}/>
        <Button label='3' onCLick={() => this.addDigit(3)}/>
        <Button label='+' operation onCLick={() => this.setOperation('+')}/>
        <Button label='0' double onCLick={() => this.addDigit(0)}/>
        <Button label='.' onCLick={() => this.addDigit('.')}/>
        <Button label='=' operation onCLick={() => this.setOperation('=')}/>
      </SafeAreaView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})


