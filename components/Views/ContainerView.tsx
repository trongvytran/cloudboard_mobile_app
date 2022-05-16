import { View, StyleSheet } from 'react-native'

interface ContainerViewProps {
  children: JSX.Element[] | JSX.Element
}

const ContainerView = ({ children }: ContainerViewProps) => {
  return <View style={styles.container}>{children}</View>
}

export default ContainerView

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
})
