import { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

type Props = {
  title: string,
  isComplete: boolean,
  onDelete: () => void,
  onComplete: () => void,
}

export default function Task({ title, isComplete, onDelete, onComplete }: Props) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onComplete}>
          <Image source={isComplete ? require('../../../assets/checked.png') : require('../../../assets/check.png') } />
        </TouchableOpacity>
        <Text style={!isComplete ? styles.title : styles.titleSelected}>{title}</Text>
        <TouchableOpacity onPress={onDelete}>
          <Image source={require('../../../assets/trash.png')} />
        </TouchableOpacity>
      </View>
    )
}
