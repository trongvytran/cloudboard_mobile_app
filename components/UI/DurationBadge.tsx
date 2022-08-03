import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Colors from '../../constants/color'

interface DurationBadgeValue {
  value: string
}

interface BadgeColorValue {
  textColor: string
  backgroundColor: string
}

const DurationBadge = ({ value }: DurationBadgeValue) => {
  const [badgeColor, setbadgeColor] = useState<BadgeColorValue>({
    textColor: Colors.layoutColor,
    backgroundColor: Colors.layoutColor,
  })

  useEffect(() => {
    switch (value) {
      case '3 months':
        setbadgeColor({
          textColor: Colors.green600,
          backgroundColor: Colors.green200,
        })
        break
      case '6 months':
        setbadgeColor({
          textColor: Colors.red600,
          backgroundColor: Colors.red200,
        })
        break
      case '12 months':
        setbadgeColor({
          textColor: Colors.yellow600,
          backgroundColor: Colors.yellow200,
        })
        break
      case '24 months':
        setbadgeColor({
          textColor: Colors.purple600,
          backgroundColor: Colors.purple200,
        })
        break
      case '36 months':
        setbadgeColor({
          textColor: Colors.cyan600,
          backgroundColor: Colors.cyan200,
        })
        break
    }
  }, [value])

  return (
    <View
      className="px-2.5 py-0.5 rounded font-medium text-sm"
      style={{ backgroundColor: badgeColor.backgroundColor }}
    >
      <Text style={{ color: badgeColor.textColor }}>{value}</Text>
    </View>
  )
}

export default DurationBadge
