import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

type Props = {
  itemsCount: number
}

export default function Empty({ itemsCount }: Props) {
    return (
      <View style={[styles.container, itemsCount > 0 ? styles.dNone : styles.dBlock]}>
        <Image source={require('../../../assets/clipboard.png')} style={styles.icon} />
        <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.textNormal}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    )
}
