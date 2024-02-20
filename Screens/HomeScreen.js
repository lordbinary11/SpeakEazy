import { View,StyleSheet,Image,Text } from 'react-native';
import Gradient1 from '../components/Gradient1';
import Gradient2 from '../components/Gradient2';
import Gradient3 from '../components/Gradient3'
import { useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';



const MyComponent = () => {

  const images = [
    require('../assets/ad1.jpg'),
    require('../assets/ad2.jpg'),
    require('../assets/ad3.jpg'),
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <Image source={item} style={styles.image} />
    );
  };

  return (
    
      <LinearGradient style={styles.container}
        colors={['white', '#1AAF4B']}
        locations={[0.5, 0.5]}
        start={{ x: 0, y: 1.8 }}
        end={{ x: 3, y: 0 }}
        
      >
      
      <View style={styles.desc}>
        <Image
          style={styles.logo}
          source={require('../assets/se2.png')}
        />
      </View>

      <Carousel
        data={images}
        renderItem={renderItem}
        containerCustomStyle={{
          flexGrow: 0,
        }}
        sliderWidth={360}
        itemWidth={350}
        layout={'default'}
        onSnapToItem={(index) => setActiveSlide(index)}
      />

      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />

      <View style={styles.gradient}>
        <Gradient1 />
        <Gradient2 />
        <Gradient3 />
      </View>
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    height: '100%',
    backgroundColor: '#E1EFE6',
  
  }, 
 
  image: {
    marginTop:0,
    marginLeft:15,
    width: 330,
    height: 200,
    borderWidth:3,
    borderColor:'#fff',
    borderBottomRightRadius:20,
    borderTopLeftRadius: 20, // Top border color
  },
  profile:{
    top:80,
    flexDirection:'row',
    alignItems:'flex-start'
  },
  circle:{
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: '#1AAF4B',
    justifyContent:'center',
    alignItems:'center',
    left: 10,
  },
  avatar:{
    width:35,
    height:35,
  },
  profileText:{
    top:13,
    marginLeft: 20,
    color: '#000',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',  
  },
  paginationContainer: {
    // Styles for the container of pagination dots
    paddingVertical: 10, // Example padding
    paddingHorizontal: 10, // Example padding
    flexDirection: 'row', // Align dots horizontally
    justifyContent: 'center', // Align dots in the center
    alignItems: 'center', // Align dots vertically
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Example background color
    borderRadius: 5, // Example border radius
  },
  dot:{
    // Styles for the pagination dot
    width: 10, // Example width
    height: 10, // Example height
    borderRadius: 5, // Example border radius (half of width/height for a circle)
    marginHorizontal: 1, // Example margin between dots
    backgroundColor: '#1AAF4B', // Example active dot color
  },
  logo: {
    width: 200,
    height: 130,
    left: 20,
    top: 10, 
    marginBottom:30,
    marginLeft:-30
  },
  logoText:{
    color:'#fff',
    fontSize:40,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    top:40,
    marginRight:10
  },
  desc:{
    top:10,
    justifyContent: 'space-between',
    alignItems:'flex-start',
    flexDirection:'row'
  },

  
});

export default MyComponent;


