import { View, Text } from 'react-native'
import React from 'react'
import { recipeList } from '../Constant';

const CardCatalogo = () => {
  const navigation = useNavigation();
  return (
    	<View>
			<FlatList				
				data={recipeList}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("RecipeDetail", { item: item })}
						style={{
							backgroundColor: colors.COLOR_V,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							borderRadius: 16,
							marginVertical: 8,
							alignItems: "center",
							paddingHorizontal: 8,
							paddingVertical: 26,
						}}
					>
						<View style={{ flexDirection: 'row', alignItems: 'flex-start'  }}>
						<Image
							source={item.image}
							style={{ width: 150, height: 150, resizeMode: "center" }}
						/>
					        <View style={{ flexDirection: 'column', alignItems: 'flex-start', width:  '50%' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>{item.Titulo}</Text>
						          <Text style={{ fontSize: 16, color: '#fff', marginLeft : 10, marginTop: 8 }}>{item.description}</Text> 
						    </View>
						</View>
				
					</Pressable>
				)}
			  numColumns={2}
				showsVerticalScrollIndicator={false}
			/>
		</View>

		
  )
}

export default CardCatalogo