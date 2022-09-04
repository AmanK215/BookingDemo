import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import PendingBookings from "./PendingBookings";
import Header from "./PendingBookings/Header";

const Bookings = props => {

  const mockData = [
    {
      img_data: [
        {
          id: 1,
          img: "img",
          Text: "Images are for the property and room can be different"
        },
        {
          id: 2,
          img: "img1",
          Text: "Images are for the property and room can be different"
        }
      ],
      details_data: {
        header_title: {
          title: "Bratislava House",
          amount: " ₹ 13,400"
        },
        location_data: {
          location: {
            img: "location",
            text: "Gachibowli, Hyderabad",
          },
          occupancy: {
            img: "bed",
            text: "Single Occupancy"
          }
        },
        amenity_text: "Amenities",
        component: {
          component1: {
            img: "compImg1",
            text: "Spacious Cupboard"
          },
          component2: {
            img: "compImg2",
            text: "Study Table"
          },
          component3: {
            img: "compImg3",
            text: "Quality AC"
          },
          component4: {
            img: "compImg4",
            text: "Bed with Mattress"
          }
        },
        buttonText: "Book Property",
        bookingNote: {
          img: "noteImg",
          text1: "Complete booking in",
          text2: " 3d 12hrs to avoid cancellation"
        }
      }
    },
    {
      img_data: [
        {
          id: 1,
          img: "img1",
          Text: "Images are for the property and room can be different"
        },
        {
          id: 2,
          img: "img",
          Text: "Images are for the property and room can be different"
        },
      ],
      details_data: {
        header_title: {
          title: "Bratislava House",
          amount: " ₹ 13,400"
        },
        location_data: {
          location: {
            img: "location",
            text: "Gachibowli, Hyderabad",
          },
          occupancy: {
            img: "bed",
            text: "Single Occupancy"
          }
        },
        amenity_text: "Amenities",
        component: {
          component1: {
            img: "compImg1",
            text: "Spacious Cupboard"
          },
          component2: {
            img: "compImg2",
            text: "Study Table"
          },
          component3: {
            img: "compImg3",
            text: "Quality AC"
          },
          component4: {
            img: "compImg4",
            text: "Bed with Mattress"
          }
        },
        buttonText: "Book Property",
        bookingNote: {
          img: "noteImg",
          text1: "Booking cancels in",
          text2: " 6hrs 30 mins"
        }
      }
    }
  ]

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={mockData}
        ListHeaderComponent={<Header headerText={'Pending Bookings'}/>}
        renderItem={({ item, index }) => (
          <PendingBookings data={item} index={index}/>
        )}
      />
    </SafeAreaView>
  )

}

export default Bookings;