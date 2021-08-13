import React, { useEffect, useState } from "react";

import InfoCard from "../components/InfoCard";
import SideBar from "../components/Sidebar";
import SpotLight from "../components/SpotLight";
import PaypalBtn from "../components/PaypalBtn";

// Material ui
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import bacon from '../images/giphy.gif'
//import { Info } from "@material-ui/icons";
//import { PayPalButton } from "react-paypal-button-v2";
//import pic

import beautiful_yellow_flowers from '../images/gallery/BEAUTIFUL_SPRING_YELLOW_FLOWERS.jpg'
import canadian_geese_waddling from '../images/gallery/CANADA GEESE BEING CANADA GEESE IN PRESTON PARK.jpg'
import canadian_geese from '../images/gallery/CANADA GEESE GALORE IN PRESTON PARK ALONG RIVER.jpg'
import kay_street_heritage from '../images/gallery/1867 HERITAGE HOME IN GALT ONTARIO FULLY RESTORED.jpg'
import abandoned_mansion_old_spa from '../images/gallery/ABANDONED HERITAGE SPA IN GALT ONTARIO FAR REMOVED FROM ITS GLORY DAYS.jpg'
import rail_tracks from '../images/gallery/ABANDONED RAIL TRACKS TO NOWHERE AT SUNSET.jpg'
import sunrise_in_agawa from '../images/gallery/AGAWA CANYON BEACH SUNSET WITH SPECIAL FILTER.jpg'
import paris_france_s_underground_catacombs from '../images/gallery/CATACOMBS UNDER THE STREETS OF PARIS FRANCE WHERE MILLIONS BURIED IN UNMARKED GRAVES.jpg'
import lazy_river from '../images/gallery/FREE FLOWING SWAMPY RIVER IN PROVINCIAL PARK.jpg'
import centuries_old_highschool from '../images/gallery/GCI SCHOOL LOOKING LIKE HOGWARTS IN GALT ONTARIO.jpg'
import golden_gates_entrance_to_palais_royale from "../images/gallery/GOLDEN GATES TO GOVERMENT'S PALAIS ROYALE IN PARIS FRANCE.jpg"
import canada_moose_in_lights from '../images/gallery/LIGHT SHOW CANADA MOOSE.jpg'
import merry_christmas_tree from '../images/gallery/LIGHTED CHRISTMAS TREE AT XMAS LIGHT SHOW.jpg'
import lone_seagull from '../images/gallery/LONE SEAGULL ON RAILING WITH DETROIT RIVER IN BACKGROUND.jpg'
import biodome_a_la_montreal from "../images/gallery/MONTREAL S BIODOME WONDER OF THE WORLD.jpg"
import river_rapids from '../images/gallery/River Rapids.jpg'
//import mercury_filter_truck_approaching_sunset from ''
import remarkable_colored_sun from '../images/gallery/SPECIAL FILTER SUNSET ON ROAD.jpg'
import view_along_the_river from '../images/gallery/VIEW DOWN GRAND RIVER TOWARDS CENTURY OLD CHURCH.jpg'
import willow_tree_in_waiting from '../images/gallery/Willow TREE IN WAITING.jpg'
import agave_and_cactus_field from '../images/gallery/Agave and Cactus Field in Mexico Desert.jpg'
import walking_trail_deep_in_the_forest from '../images/gallery/BLACK AND WHITE VIEW OF DEEP FOREST WALKING TRAIL.jpg'
import sunset from '../images/gallery/BLURRED SUNSET WHILE DRIVING.jpg'
import awfully_odd_sign_in_downtown_paris from '../images/gallery/FUNNY SIGN IN PARIS FRANCE.jpg'
import ambassador_bridge from '../images/gallery/LONGSHOT OF AMBASSADOR BRIDGE FROM WINDSOR TO DETROIT WITH WINDSOR SCULTURE GARDEN IN FOREGROUND.jpg'
import rail_bridge_and_water_lock from '../images/gallery/Mini Waterfall with Rail Bridge in Background.jpg'
import rain_dripping_off_a_giant_granite_rock_face from '../images/gallery/RAIN DROPS DRIPPING OFF GIANT ROCK IN TROPICAL FOREST.jpg'
import chinese_river_flowing_under_a_bridge from '../images/gallery/RIVER FLOWING UNDER BRIDGE IN CHINESE RIVER IN SHANGHAI CHINA.jpg'
import trickling_stream_in_bruce_peninsula_park from '../images/gallery/SINGING SANDS TRIBUATARY FROM GEORGIAN BAY VERY COLD WATER.jpg'
import resort_spa_ceiling from '../images/gallery/Spa Ceiling.jpg'
import busiest_international_bridge_crossing from '../images/gallery/STREET LEVEL SHOT OF AMBASSADOR BRIDGE WITH TRUCK CROSSING IN WINDSOR ON.jpg'
import remnants_of_destroyed_mill from '../images/gallery/TRIBUTE TO A MOTHER IN THE RUINS OF AN OLD MILL ALONG THE GRAND RIVER.jpg'
import trout_river_at_singing_sands_beach from '../images/gallery/TROUT RIVER AT SINGING SANDS BEACH NEAR TOBERMORY ONTARIO.jpg'
import view_from_below_the_bridge from '../images/gallery/UNDERNEATH WINDING SHOT OF AMBASSADOR BRIDGE BUSIEST INTRNATIONAL BORDER CROSSING IN THE WORLD.jpg'
import ocean_freighter_under_the_ambassador_bridge from '../images/gallery/WINDING SHOT OF AMBASSADOR BRIDGE WITH OCEAN FREIGHTER CROSSING UNDERNEATH.jpg'
import agawa_waterfall_with_special_filter from '../images/gallery/AGAWA CANYON MOUNTAINSIDE WATERFALL IN NORTHERN ONTARIO with Special Filter.jpg'
import french_capitol_building from '../images/gallery/FRENCH GOVERNMENT MAIN PARLIAMENT BUILDING IN PARIS FRANCE WITH SPECIAL NIGHT FILTER.jpg'
import fallen_tree_in_the_lake from '../images/gallery/GLORIOUS PICTURE OF FALLEN TREE IN SWAMP WITH SPECIAL FILTER.jpg'
//SECOND BATCH
import hiram_walkers_head_office_building from '../images/gallery/HIRAM WALKERS CANADIAN CLUB HISTORICAL HEAD OFFICE BUILDING IN WINDSOR ONTARIO.jpg'
import mexican_oasis_and_gardens from '../images/gallery/Mexican OASIS AND GARDENS.jpg'
import agawa_mountainside_waterfall from '../images/gallery/MOUNTAINSIDE WATERFALL IN NORTHERN ONTARIO.jpg'
import mill_destroyed_on_the_grand from '../images/gallery/OLD MILL REMNANTS ON GRAND RIVER IN BACKGROUND.jpg'
import old_fishing_camp_on_the_river from '../images/gallery/REMNANTS OF OLD FISHING CAMP ALONG RIVER IN PRESTON ONTARIO.jpg'
import mill_destroyed from '../images/gallery/REMNANTS OF OLD MILL ON GRAND RIVER.jpg'
import leviathan_at_versailles from '../images/gallery/SHRUBBERY LEVIATHAN IN FRONT OF ONE OF THE PALACES IN VERSAILLES FRANCE.jpg'
import black_and_white_river_view from '../images/gallery/SPECIAL FILTER VIEW OF GRAND RIVER AND FOREGROUND FOLIAGE (2).jpg'
import louis_the_14th_statue_in_paris_france from '../images/gallery/STUNNING STATUE OF LOUIS THE XIV IN FRENCH PARLIAMENT SQUARE.jpg'
import mayan_tiki_huts from '../images/gallery/TIKI SHADE HUTS AND LAKE IN PLAYA DEL CARMEN MEXICO.jpg'
import winter_wonderland from '../images/gallery/WINTER WONDERLAND TRAIL IN NORTHERN NATIONAL PARK.jpg'
import canadian_house_of_commons_historic_architecture from '../images/gallery/ATRIUM ARCHITECTURE IN CANADIAN PARLIAMENT BUILDINGS.jpg'
import b_w_of_underbelly_of_ambassdor_bridge from '../images/gallery/BLACK AND WHITE SHOT OF AMBASSADOR BRIDGE LOOKING TOWARD UNIVERSITY OF WINDSOR.jpg'
import estuary_at_singing_sands_beach from '../images/gallery/ESTUARY FROM GEORGIAN BAY LEADING INLAND TO PROVINCIAL PARK.jpg'
import majestic_ceiling_of_louvre_museum from '../images/gallery/GORGEOUS PAINTED CEILING AND CHANDELIERS IN ONE OF THE MANY PALACES IN VERSAILLES FRANCE.jpg'
import extraordinary_stained_glass_in_house_of_commons from '../images/gallery/HISTORIC STAINED GLASS WINDOWS IN CANADIAN HOUSE OF COMMONS IN OTTAWA.jpg'
import light_tunnel from '../images/gallery/Light Tunnel.jpg'
import trail_along_the_shore from '../images/gallery/LUSH TREE PARTIALLY OBSTRUCTED VIEW OF RAIL BRIDGE OVER GRAND RIVER.jpg'
import central_park_in_autumn from '../images/gallery/NY CENTRAL PARK IN SPRING TIME.jpg'
import rustic_barn from '../images/gallery/OLD BARN IN ABANDONED BACKYARD.jpg'
import rocky_shoreline_of_bruce_peninsula from '../images/gallery/ROCKY LAKESHORE BEACH ON GEORGIAN BAY.jpg'
import pagoda_plantation_in_beijing_china from '../images/gallery/WATERLILLIES WITH CHINESE PAGODA IN BACKDROP IN SHANGHAI CHINA.jpg'
import paris_france_boulevard from '../images/gallery/PARIS FRANCE STREET VIEW AND AMAZING ARCHITECTURE.jpg'
import gorgeous_cenote_on_the_gulf_of_mexico from '../images/gallery/GORGEOUS CENOTE ON THE GULF OF MEXICO.jpg'



const tires = {
	"1": [75,150,475,650,825],
	"3": [150,300,550,725,900],
	"3A": [150,300,475,680,840],
	"5": [350,500,750,925,1100],
}

// dictionary of 
/* referenceName : {
 	prices: [length 5],
 	paypalID:  value
}*/
const buttonDictionaryMinified = {
	"beautiful yellow flowers":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"QTMSU65XNKHSW"
	},
	"canadian geese waddling":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"QEDJ45C5DRQEE"
	},
	"canadian geese":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"3MFMDSQHP373S"
	},
	"9 kay street heritage":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"29BULPRJPR3C6"
	},
	"abandoned mansion old spa":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"5SE3S6ANVAKDU"
	},
	"rail tracks":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"7VK4RJHLKHUUE"
	},
	"sunrise in agawa":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"E9VRNTKW9VWHE"
	},
	"paris france s underground catacombs":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"8BD3Z7GUU7S44"
	},
	"lazy river":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"NJLP2UY4G65RG"
	},
	"centuries old highschool":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"5GHRADEYJHQ3W"
	},
	"golden gates entrance to palais royale":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"JBP9UQWY2RE4C"
	},
	"canada moose in lights":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"A5HGCZ3AGWNML"
	},
	"merry christmas tree":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"H4QBE752L3R4U"
	},
	"lone seagull":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"VFRQG692PMUG2"
	},
	"biodome a la montreal":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"5E34S4Z2T66SU"
	},
	"river rapids":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"AG5T5JBGBQBWY"
	},
	"mercury filter truck approaching sunset":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"9GXSKGW7NQFHE"
	},
	"remarkable colored sun":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"S28K5KK7F3YLY"
	},
	"view along the river":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"KC27KKCVG5HWW"
	},
	"willow tree in waiting":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"D9Z3TFX9HNZCN"
	},
	"agave and cactus field":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "475.00",
		  "680.00",
		  "840.00"
	   ],
	   "paypalID":"RF3J6HMZY4UZC"
	},
	"walking trail deep in the forest":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"KDZ972RY7ZASG"
	},
	"sunset":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"HPE2J6RWQ7WFE"
	},
	"awfully odd sign in downtown paris":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "475.00",
		  "680.00",
		  "840.00"
	   ],
	   "paypalID":"65NXV343WCC58"
	},
	"ambassador bridge":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"GLEDRUFYSFH5U"
	},
	"rail bridge and water lock":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"A5WUADFYUNFH8"
	},
	"rain dripping off a giant granite rock face":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "475.00",
		  "680.00",
		  "840.00"
	   ],
	   "paypalID":"RYPFSJRTLT5VN"
	},
	"chinese river flowing under a bridge":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "475.00",
		  "680.00",
		  "840.00"
	   ],
	   "paypalID":"BYDQR5RYXZY9W"
	},
	"trickling stream in bruce peninsula park":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"AAWRQDA2RG9LJ"
	},
	"resort spa ceiling":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"YTPT38JZXJ8JC"
	},
	"busiest international bridge crossing":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "475.00",
		  "680.00",
		  "840.00"
	   ],
	   "paypalID":"Z435YGQ65SXJ6"
	},
	"remnants of destroyed mill":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"LKTYVTG9L23HS"
	},
	"trout river at singing sands beach":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"LKTYVTG9L23HS"
	},
	"view from below the bridge":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"5JJ3KQGW72YJN"
	},
	"ocean freighter under the ambassador bridge":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"PQA5PDYHNBC2C"
	},
	"agawa waterfall with special filter":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "475.00",
		  "680.00",
		  "840.00"
	   ],
	   "paypalID":"34KMHDVP2C9GJ"
	},
	"french capitol building":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"GSGK76XCBWA9L"
	},
	"fallen tree in the lake":{
	   "prices":[
		  "350.00",
		  "500.00",
		  "750.00",
		  "925.00",
		  "1,100.00"
	   ],
	   "paypalID":"TVCYKY5KDX9V8"
	},
	// SECOND BATCH
	"hiram walkers head office building":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"CQJRRZ5RJVK6J"
	},
	"mexican oasis and gardens":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "475.00",
		  "680.00",
		  "840.00"
	   ],
	   "paypalID":"YF8HF5BDPV43Q"
	},
	"agawa mountainside waterfall":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"4PLMCJSR5JQGW"
	},
	"mill destroyed on the grand":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"K4646AXB3V3Q2"
	},
	"old fishing camp on the river":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"Z2F9M9BZXSHRW"
	},
	"mill destroyed":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"6F6HRHCJR3E9J"
	},
	"leviathan at versailles":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"3DJB6D8P8KXD4"
	},
	"black and white river view":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"GKZUL7F924XAA"
	},
	"louis the 14th statue in paris france":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"ZMXTGZ5XNQ3SQ"
	},
	"mayan tiki huts":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"8WEGEGS24H4BJ"
	},
	"winter wonderland":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"WJET2EDTYQA7Y"
	},
	"canadian house of commons historic architecture":{
	   "prices":[
		  "350.00",
		  "500.00",
		  "750.00",
		  "925.00",
		  "1,100.00"
	   ],
	   "paypalID":"W22YTB2GMSF2G"
	},
	"b w of underbelly of ambassdor bridge":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"AGSK4TPV3UVJC"
	},
	"estuary at singing sands beach":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "475.00",
		  "680.00",
		  "840.00"
	   ],
	   "paypalID":"HJQ77XE3DQB24"
	},
	"majestic ceiling of louvre museum":{
	   "prices":[
		  "350.00",
		  "500.00",
		  "750.00",
		  "925.00",
		  "1,100.00"
	   ],
	   "paypalID":"BAY78W4PUJRJA"
	},
	"extraordinary stained glass in house of commons":{
	   "prices":[
		  "350.00",
		  "500.00",
		  "750.00",
		  "925.00",
		  "1,100.00"
	   ],
	   "paypalID":"CJ77YWBMMNSA8"
	},
	"light tunnel":{
	   "prices":[
		  "75.00",
		  "150.00",
		  "475.00",
		  "650.00",
		  "825.00"
	   ],
	   "paypalID":"EE6HGZV5F39U8"
	},
	"trail along the shore":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"7DERQUBBMMLE2"
	},
	"central park in autumn":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"YLCKY9CTSQZF6"
	},
	"rustic barn":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "475.00",
		  "680.00",
		  "840.00"
	   ],
	   "paypalID":"NYPM6QJ4NZPTA"
	},
	"rocky shoreline of bruce peninsula":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"CXS4FJVXS2GAU"
	},
	"pagoda plantation in beijing china":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"Y3YDPRDA86HSE"
	},
	"paris france boulevard":{
	   "prices":[
		  "150.00",
		  "300.00",
		  "550.00",
		  "725.00",
		  "900.00"
	   ],
	   "paypalID":"PUDGDLS6QVY8G"
	},
	"gorgeous cenote on the gulf of mexico": {"prices": ["150.00", "300.00", "550.00", "725.00", "900.00"], "paypalID": "N2973YMXK7YU8"},
 }


 
// dictionary for referenceName : picture import
const imageDictionary = {
	"beautiful yellow flowers":beautiful_yellow_flowers,
	"canadian geese waddling":canadian_geese_waddling,
	"canadian geese":canadian_geese,
	"9 kay street heritage":kay_street_heritage,
	"abandoned mansion old spa":abandoned_mansion_old_spa,
	"rail tracks":rail_tracks,
	"sunrise in agawa":sunrise_in_agawa,
	"paris france s underground catacombs":paris_france_s_underground_catacombs,
	"lazy river":lazy_river,
	"centuries old highschool":centuries_old_highschool,
	"golden gates entrance to palais royale":golden_gates_entrance_to_palais_royale,
	"canada moose in lights":canada_moose_in_lights,
	"merry christmas tree":merry_christmas_tree,
	"lone seagull":lone_seagull,
	"biodome a la montreal":biodome_a_la_montreal,
	"river rapids":river_rapids,
	// "mercury filter truck approaching sunset":mercury_filter_truck_approaching_sunset,
	"remarkable colored sun":remarkable_colored_sun,
	"view along the river":view_along_the_river,
	"willow tree in waiting":willow_tree_in_waiting,
	"agave and cactus field":agave_and_cactus_field,
	"walking trail deep in the forest":walking_trail_deep_in_the_forest,
	"sunset":sunset,
	"awfully odd sign in downtown paris":awfully_odd_sign_in_downtown_paris,
	"ambassador bridge":ambassador_bridge,
	"rail bridge and water lock":rail_bridge_and_water_lock,
	"rain dripping off a giant granite rock face":rain_dripping_off_a_giant_granite_rock_face,
	"chinese river flowing under a bridge":chinese_river_flowing_under_a_bridge,
	"trickling stream in bruce peninsula park":trickling_stream_in_bruce_peninsula_park,
	"resort spa ceiling":resort_spa_ceiling,
	"busiest international bridge crossing":busiest_international_bridge_crossing,
	"remnants of destroyed mill":remnants_of_destroyed_mill,
	"trout river at singing sands beach":trout_river_at_singing_sands_beach,
	"view from below the bridge":view_from_below_the_bridge,
	"ocean freighter under the ambassador bridge":ocean_freighter_under_the_ambassador_bridge,
	"agawa waterfall with special filter":agawa_waterfall_with_special_filter,
	"french capitol building":french_capitol_building,
	"fallen tree in the lake":fallen_tree_in_the_lake,
	//SECOND BATCH
	"hiram_walkers_head_office_building":hiram_walkers_head_office_building,
	"mexican_oasis_and_gardens":mexican_oasis_and_gardens,
	"agawa_mountainside_waterfall":agawa_mountainside_waterfall,
	"mill_destroyed_on_the_grand":mill_destroyed_on_the_grand,
	"old_fishing_camp_on_the_river":old_fishing_camp_on_the_river,
	"mill_destroyed":mill_destroyed,
	"leviathan_at_versailles":leviathan_at_versailles,
	"black_and_white_river_view":black_and_white_river_view,
	"louis_the_14th_statue_in_paris_france":louis_the_14th_statue_in_paris_france,
	"mayan_tiki_huts":mayan_tiki_huts,
	"winter_wonderland":winter_wonderland,
	"canadian_house_of_commons_historic_architecture":canadian_house_of_commons_historic_architecture,
	"b_w_of_underbelly_of_ambassdor_bridge":b_w_of_underbelly_of_ambassdor_bridge,
	"estuary_at_singing_sands_beach":estuary_at_singing_sands_beach,
	"majestic_ceiling_of_louvre_museum":majestic_ceiling_of_louvre_museum,
	"extraordinary_stained_glass_in_house_of_commons":extraordinary_stained_glass_in_house_of_commons,
	"light_tunnel":light_tunnel,
	"trail_along_the_shore":trail_along_the_shore,
	"central_park_in_autumn":central_park_in_autumn,
	"rustic_barn":rustic_barn,
	"rocky_shoreline_of_bruce_peninsula":rocky_shoreline_of_bruce_peninsula,
	"pagoda_plantation_in_beijing_china":pagoda_plantation_in_beijing_china,
	"paris_france_boulevard":paris_france_boulevard,
	"gorgeous cenote on the gulf of mexico":gorgeous_cenote_on_the_gulf_of_mexico,
 }

// (refname,width,title)
const displaySettings =[
	["beautiful yellow flowers",6, "Beautiful Spring Yellow Flowers"],
	["canadian geese waddling",6, "Canada Geese Being Canada Geese in Preston Park"],
	["canadian geese",6, "Canada Geese Galore in Preston Park Along River"],
	["9 kay street heritage",6, "1867 Heritage Home In Galt Ontario"],
	["abandoned mansion old spa",6, "Abandoned Heritage Spa in Galt"],
	["rail tracks",6, "Abandoned Rail Tracks to Nowhere as Sunset"],
	["sunrise in agawa",6, "AGAWA CANYON BEACH SUNSET WITH SPECIAL FILTER"],
	["paris france s underground catacombs",6, "Catacombs Under the Streets of Paris France Where Millions Buried in Unmarked Graves"],
	["lazy river",6, "FREE FLOWING SWAMPY RIVER IN PROVINCIAL PARK"],
	["centuries old highschool",6, "GCI School looking like Hogwarts"],
	["golden gates entrance to palais royale",6, "Golden Gates to Government's Palais Royale in Paris France"],
	["centuries old highschool",6, "Hogwarts Lookalike GCI School with filter"],
	["canada moose in lights",6, "Light Show Canada  Moose"],
	["merry christmas tree",6, "LIGHTED CHRISTMAS TREE AT XMAS LIGHT SHOW"],
	["lone seagull",6, "Lone Seagull on Railing with Detroit River"],
	["biodome a la montreal",6, "Montreal's Biodome - Wonder of the World"],
	["river rapids",6, "River Rapids"],
	// ["mercury filter truck approaching sunset",6, "SPECIAL FILTER SUNSET ON ROAD"],
	["remarkable colored sun",6, "STUNNING SUNSET IN PARIS ONTARIO WITH TREES IN FOREGROUND"],
	["view along the river",6, "View Along the Grand River"],
	["willow tree in waiting",6, "willow tree in waiting"],
	["agave and cactus field",6, "Agave and Cactus Field in Mexico Desert"],
	["walking trail deep in the forest",6, "Black and White View of Deep Forest Walking Trail"],
	["sunset",6, "BLURRED SUNSET WHILE DRIVING"],
	["awfully odd sign in downtown paris",6, "Funny Sign in Paris France"],
	["ambassador bridge",6, "Longshot of Ambassador Bridge from Windsor to Detroit WITH WINDSOR SCULTURE GARDEN IN FOREGROUND"],
	["rail bridge and water lock",6, "Mini Waterfall with Rail Bridge in Background"],
	["beachfront restaurant in mexican riviera",6, "Playa Del Carmen Oceanside Restaurant and Beach"],
	["rain dripping off a giant granite rock face",6, "RAIN DROPS DRIPPING OFF GIANT ROCK IN TROPICAL FOREST"],
	["chinese river flowing under a bridge",6, "River Flowing Under Bridge in Shanghai China"],
	["trickling stream in bruce peninsula park",6, "SINGING SANDS TRIBUATARY FROM GEORGIAN BAY - VERY COLD WATER!"],
	["resort spa ceiling",6, "Spa Ceiling"],
	["busiest international bridge crossing",6, "STREET LEVEL SHOT OF AMBASSADOR BRIDGE WITH TRUCK CROSSING IN WINDSOR ON"],
	["sunrise in agawa",6, "Sunset in Agawa Canyon Beach"],
	["remnants of destroyed mill",6, "TRIBUTE TO A MOTHER IN THE RUINS OF AN OLD MILL ALONG THE GRAND RIVER"],
	["trout river at singing sands beach",6, "Trout River at Singing Sands Beach Near Tobermory Ontario"],
	["view from below the bridge",6, "UNDERNEATH WINDING SHOT OF AMBASSADOR BRIDGE - BUSIEST INTRNATIONAL BORDER CROSSING IN THE WORLD!"],
	["ocean freighter under the ambassador bridge",6, "WINDING SHOT OF AMBASSADOR BRIDGE WITH OCEAN FREIGHTER CROSSING UNDERNEATH"],
	["agawa waterfall with special filter",6, "Agawa Canyon Mountainside Waterfall in Northern Ontario with Special Filter"],
	["french capitol building",6, "French Government Main Parliament Building in Paris France With Special Night Filter"],
	["fallen tree in the lake",6, "Glorious Picture of Fallen Tree in Swamp with Special Filter"],
]

// (id,title,width,minPrice,maxPrice,imageRef,paybutton)
const displaySettingsVerbose = displaySettings.map( (ele,index) => {
	const ref = ele[0]
	const buttonInfo = buttonDictionaryMinified[ref]
	if (buttonInfo == undefined){
		console.log("NOT FOUND IN REF: %s",ref)
		return
	}
	const buttonRender = (<PaypalBtn {...buttonInfo} />)
	const displayImage = imageDictionary[ref]
	const minPrice = buttonInfo["prices"][0]
	const maxPrice = buttonInfo["prices"][4]
	return [index,ele[2],ele[1],minPrice,maxPrice,displayImage,buttonRender]
})

const Gallery = () => {
	const [spotLightInfo, setSpotLightInfo] = useState([false,0,undefined,undefined]) // [show,yPos,title,image]
	const [imageCount,setImageCount] = useState(10)
	const [currentDisplay,setCurrentDisplay] = useState(displaySettingsVerbose.slice(0,imageCount))
	console.log(spotLightInfo)
	const navBarShiftFactor = 48
	useEffect(function mount(){
		function onScroll(){
			if(!spotLightInfo[0]){
				const newInfo = [spotLightInfo[0],window.scrollY,spotLightInfo[2],spotLightInfo[3]]
				setSpotLightInfo(newInfo)
			}
		}
		window.addEventListener('scroll',onScroll);
		return function unMount(){
			window.removeEventListener('scroll',onScroll);
		}
	})

	const viewImageCallBack = (image,title) => {
		console.log('call')
		const newInfo = [true,spotLightInfo[1],title,image]
		setSpotLightInfo(newInfo)
	}

  return (
    <>
      {!spotLightInfo[0] && <SideBar activeTab={2}/>}
	  <SpotLight 
	  	selected={spotLightInfo[0]}
		callback={() => { const newInfo = [false,spotLightInfo[1],spotLightInfo[2],spotLightInfo[3]]; setSpotLightInfo(newInfo)}}
		image={spotLightInfo[3]}
		offSet={spotLightInfo[1]}
	  />
	  <div style={ spotLightInfo[0] ? {position:"fixed",top:-(spotLightInfo[1]-navBarShiftFactor)} : undefined}>
      <div
        className="lg-text bold-text cyan-text"
        style={{ width: "100%", textAlign: "center" }}
      >
        Gallery
      </div>
      <br />
	  <Grid
          container
          spacing={4}
          justify="center"
          style={{ padding: "10px 20px" }}
        >
			{ currentDisplay.map((x) => { //(id,title,width,minPrice,maxPrice,imageRef,paybutton)
				return (<Grid
					item
					key={x[0]}
					xs={12}
					md={x[2]}
				>
					<InfoCard 
					id={x[0]}
					name={x[1]} 
					minPrice={x[3]}
					maxPrice={x[4]}
					image={x[5]}
					paypal={x[6]}
					viewCallBack={viewImageCallBack}
					/>
				</Grid>)
		})}
		</Grid>
      <br />
      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#D6FFF6", width: "100%" }}
			onClick={() => {
				let newImageCount = imageCount + 10
				setImageCount(newImageCount)
				setCurrentDisplay(displaySettingsVerbose.slice(0,newImageCount))
			}}
          >
            Load more
          </Button>
        </Grid>
      </Grid>
	  </div>
    </>
  );
};

export default Gallery;



