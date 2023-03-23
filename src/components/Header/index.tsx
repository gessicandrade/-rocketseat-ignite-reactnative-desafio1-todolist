import { Image, Text, View } from 'react-native'

export default function Header() {
    return (
      <View style={{ backgroundColor: '#0D0D0D', height: 173, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../../../assets/logo.png')} />
      </View>
    )
}
