import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

type Props = {
  countTasks: number,
  tasksIsComplete: number,
}
export default function Count({ countTasks, tasksIsComplete }: Props) {
    return (
      <View style={styles.container}>
        <View style={styles.counterCreated}>
          <Text style={styles.counterCreatedTitle}>Criadas</Text>
          <Text style={styles.counterCreatedNumber}>{countTasks}</Text>
        </View>
        <View style={styles.counterDone}>
          <Text style={styles.counterDoneTitle}>Concluídas</Text>
          <Text style={styles.counterDoneNumber}>{tasksIsComplete}</Text>
        </View>
      </View>
    )
}
