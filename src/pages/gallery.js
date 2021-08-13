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


// TODO need to add <tbody> in all table to supress error
const buttonDictionary = {
	"beachfront restaurant in mexican riviera":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="JSW7NWPW662DJ" />
			<table>
				<tbody>
					<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
						<option value="8X10">8X10 $150.00 CAD</option>
						<option value="11X14">11X14 $225.00 CAD</option>
						<option value="16X20">16X20 $295.00 CAD</option>
						<option value="20X24">20X24 $350.00 CAD</option>
						<option value="20X30">20X30 $415.00 CAD</option>
					</select> </td></tr>
				</tbody>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"gorgeous cenote on the gulf of mexico":
		(
			<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
				<input type="hidden" name="cmd" value="_s-xclick" />
				<input type="hidden" name="hosted_button_id" value="N2973YMXK7YU8" />
				<table>
					<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
						<option value="8X10">8X10 $180.00 CAD</option>
						<option value="11X14">11X14 $250.00 CAD</option>
						<option value="16X20">16X20 $315.00 CAD</option>
						<option value="20X24">20X24 $375.00 CAD</option>
						<option value="20X30">20X30 $435.00 CAD</option>
					</select> </td></tr>
				</table>
				<input type="hidden" name="currency_code" value="CAD" />
				<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
				<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
			</form>
		),
	"mexican oasis and gardens":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="YF8HF5BDPV43Q" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $165.00 CAD</option>
					<option value="11X14">11X14 $235.00 CAD</option>
					<option value="16X20">16X20 $305.00 CAD</option>
					<option value="20X24">20X24 $360.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"street view of times square in ny city":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="RR9J3TX5CBRG4" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $200.00 CAD</option>
					<option value="11X14">11X14 $275.00 CAD</option>
					<option value="16X20">16X20 $350.00 CAD</option>
					<option value="20X24">20X24 $405.00 CAD</option>
					<option value="20X30">20X30 $475.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"paris france s underground catacombs":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="8BD3Z7GUU7S44" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"leviathan at versailles":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="3DJB6D8P8KXD4" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $165.00 CAD</option>
					<option value="11X14">11X14 $235.00 CAD</option>
					<option value="16X20">16X20 $305.00 CAD</option>
					<option value="20X24">20X24 $360.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"majestic ceiling of louvre museum":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="BAY78W4PUJRJA" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $170.00 CAD</option>
					<option value="11X14">11X14 $245.00 CAD</option>
					<option value="16X20">16X20 $310.00 CAD</option>
					<option value="20X24">20X24 $370.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"paris france boulevard":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="PUDGDLS6QVY8G" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $175.00 CAD</option>
					<option value="11X14">11X14 $255.00 CAD</option>
					<option value="16X20">16X20 $315.00 CAD</option>
					<option value="20X24">20X24 $375.00 CAD</option>
					<option value="20X30">20X30 $435.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"french capitol building":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="GSGK76XCBWA9L" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $165.00 CAD</option>
					<option value="11X14">11X14 $235.00 CAD</option>
					<option value="16X20">16X20 $305.00 CAD</option>
					<option value="20X24">20X24 $360.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"the famous moulin rouge":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="PCQSVKLK3H6DE" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $195.00 CAD</option>
					<option value="11X14">11X14 $265.00 CAD</option>
					<option value="16X20">16X20 $345.00 CAD</option>
					<option value="20X24">20X24 $395.00 CAD</option>
					<option value="20X30">20X30 $475.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"louis the 14th statue in paris france":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="ZMXTGZ5XNQ3SQ" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $165.00 CAD</option>
					<option value="11X14">11X14 $235.00 CAD</option>
					<option value="16X20">16X20 $305.00 CAD</option>
					<option value="20X24">20X24 $360.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"giant willow tree":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="7XDZQ5NQWFABS" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"willow tree in waiting":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="D9Z3TFX9HNZCN" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"rocky shoreline of bruce peninsula":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="CXS4FJVXS2GAU" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $170.00 CAD</option>
					<option value="11X14">11X14 $245.00 CAD</option>
					<option value="16X20">16X20 $310.00 CAD</option>
					<option value="20X24">20X24 $370.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"trout pond in bruce peninsula national park":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="P7VQM4W8EATX8" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $150.00 CAD</option>
					<option value="11X14">11X14 $225.00 CAD</option>
					<option value="16X20">16X20 $295.00 CAD</option>
					<option value="20X24">20X24 $350.00 CAD</option>
					<option value="20X30">20X30 $415.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"trickling stream in bruce peninsula park":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="AAWRQDA2RG9LJ" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $150.00 CAD</option>
					<option value="11X14">11X14 $225.00 CAD</option>
					<option value="16X20">16X20 $295.00 CAD</option>
					<option value="20X24">20X24 $350.00 CAD</option>
					<option value="20X30">20X30 $415.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"trout river at singing sands beach":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="FCHBHXS8AY4LQ" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $150.00 CAD</option>
					<option value="11X14">11X14 $225.00 CAD</option>
					<option value="16X20">16X20 $295.00 CAD</option>
					<option value="20X24">20X24 $350.00 CAD</option>
					<option value="20X30">20X30 $415.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"old log dump side of the grotto":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="HGXHU5T3EY8LW" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $215.00 CAD</option>
					<option value="11X14">11X14 $285.00 CAD</option>
					<option value="16X20">16X20 $375.00 CAD</option>
					<option value="20X24">20X24 $425.00 CAD</option>
					<option value="20X30">20X30 $500.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"estuary at singing sands beach":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="HJQ77XE3DQB24" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $170.00 CAD</option>
					<option value="11X14">11X14 $245.00 CAD</option>
					<option value="16X20">16X20 $310.00 CAD</option>
					<option value="20X24">20X24 $370.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"the grotto":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="L2QESBLZVKURW" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $205.00 CAD</option>
					<option value="11X14">11X14 $280.00 CAD</option>
					<option value="16X20">16X20 $360.00 CAD</option>
					<option value="20X24">20X24 $415.00 CAD</option>
					<option value="20X30">20X30 $485.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"the eiffel tower lit at night in paris france":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="ZR2DE3WW2P5DG" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $250.00 CAD</option>
					<option value="11X14">11X14 $300.00 CAD</option>
					<option value="16X20">16X20 $375.00 CAD</option>
					<option value="20X24">20X24 $445.00 CAD</option>
					<option value="20X30">20X30 $545.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"la louvre museum painted art ceiling":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="DPRMH4ZHKT3RQ" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $200.00 CAD</option>
					<option value="11X14">11X14 $275.00 CAD</option>
					<option value="16X20">16X20 $350.00 CAD</option>
					<option value="20X24">20X24 $405.00 CAD</option>
					<option value="20X30">20X30 $475.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"under the base of the famous eiffel tower in paris":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="XA4SE88JP35DY" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $200.00 CAD</option>
					<option value="11X14">11X14 $260.00 CAD</option>
					<option value="16X20">16X20 $340.00 CAD</option>
					<option value="20X24">20X24 $400.00 CAD</option>
					<option value="20X30">20X30 $460.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"chinese river flowing under a bridge":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="BYDQR5RYXZY9W" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $150.00 CAD</option>
					<option value="11X14">11X14 $225.00 CAD</option>
					<option value="16X20">16X20 $295.00 CAD</option>
					<option value="20X24">20X24 $350.00 CAD</option>
					<option value="20X30">20X30 $415.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"pagoda plantation in beijing china":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="Y3YDPRDA86HSE" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $170.00 CAD</option>
					<option value="11X14">11X14 $245.00 CAD</option>
					<option value="16X20">16X20 $310.00 CAD</option>
					<option value="20X24">20X24 $370.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"rain dripping off a giant granite rock face":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="RYPFSJRTLT5VN" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $150.00 CAD</option>
					<option value="11X14">11X14 $225.00 CAD</option>
					<option value="16X20">16X20 $295.00 CAD</option>
					<option value="20X24">20X24 $350.00 CAD</option>
					<option value="20X30">20X30 $415.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"biodome a la montreal":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="5E34S4Z2T66SU" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"extraordinary stained glass in house of commons":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="CJ77YWBMMNSA8" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $170.00 CAD</option>
					<option value="11X14">11X14 $245.00 CAD</option>
					<option value="16X20">16X20 $310.00 CAD</option>
					<option value="20X24">20X24 $370.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"canadian house of commons historic architecture":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="W22YTB2GMSF2G" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $170.00 CAD</option>
					<option value="11X14">11X14 $245.00 CAD</option>
					<option value="16X20">16X20 $310.00 CAD</option>
					<option value="20X24">20X24 $370.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"agave and cactus field":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="RF3J6HMZY4UZC" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $150.00 CAD</option>
					<option value="11X14">11X14 $225.00 CAD</option>
					<option value="16X20">16X20 $295.00 CAD</option>
					<option value="20X24">20X24 $350.00 CAD</option>
					<option value="20X30">20X30 $415.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"golden gates entrance to palais royale":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="JBP9UQWY2RE4C" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"arc de triomphe":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="T3JH6J5XTGVSU" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $200.00 CAD</option>
					<option value="11X14">11X14 $275.00 CAD</option>
					<option value="16X20">16X20 $350.00 CAD</option>
					<option value="20X24">20X24 $405.00 CAD</option>
					<option value="20X30">20X30 $475.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	//"me and my youngest son" : '',
	"9 kay street heritage":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="29BULPRJPR3C6" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"awfully odd sign in downtown paris":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="65NXV343WCC58" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $150.00 CAD</option>
					<option value="11X14">11X14 $225.00 CAD</option>
					<option value="16X20">16X20 $295.00 CAD</option>
					<option value="20X24">20X24 $350.00 CAD</option>
					<option value="20X30">20X30 $415.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"times square ny city":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="8ULJUNQ75X28L" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $250.00 CAD</option>
					<option value="11X14">11X14 $300.00 CAD</option>
					<option value="16X20">16X20 $375.00 CAD</option>
					<option value="20X24">20X24 $445.00 CAD</option>
					<option value="20X30">20X30 $545.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"central park in autumn":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="YLCKY9CTSQZF6" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $170.00 CAD</option>
					<option value="11X14">11X14 $245.00 CAD</option>
					<option value="16X20">16X20 $310.00 CAD</option>
					<option value="20X24">20X24 $370.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"mayan tiki huts":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="8WEGEGS24H4BJ" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $165.00 CAD</option>
					<option value="11X14">11X14 $235.00 CAD</option>
					<option value="16X20">16X20 $305.00 CAD</option>
					<option value="20X24">20X24 $360.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"new york subway":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="WHG3F5U6LAUGJ" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $210.00 CAD</option>
					<option value="11X14">11X14 $285.00 CAD</option>
					<option value="16X20">16X20 $365.00 CAD</option>
					<option value="20X24">20X24 $415.00 CAD</option>
					<option value="20X30">20X30 $495.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"lone seagull":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="VFRQG692PMUG2" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"b w of underbelly of ambassdor bridge":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="AGSK4TPV3UVJC" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $170.00 CAD</option>
					<option value="11X14">11X14 $245.00 CAD</option>
					<option value="16X20">16X20 $310.00 CAD</option>
					<option value="20X24">20X24 $370.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"view from below the bridge":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="5JJ3KQGW72YJN" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $150.00 CAD</option>
					<option value="11X14">11X14 $225.00 CAD</option>
					<option value="16X20">16X20 $295.00 CAD</option>
					<option value="20X24">20X24 $350.00 CAD</option>
					<option value="20X30">20X30 $415.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"ocean freighter under the ambassador bridge":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="PQA5PDYHNBC2C" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $150.00 CAD</option>
					<option value="11X14">11X14 $225.00 CAD</option>
					<option value="16X20">16X20 $295.00 CAD</option>
					<option value="20X24">20X24 $350.00 CAD</option>
					<option value="20X30">20X30 $415.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	//"ocean freighter under the ambassador bridge" : '',
	"hiram walkers head office building":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="CQJRRZ5RJVK6J" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $165.00 CAD</option>
					<option value="11X14">11X14 $235.00 CAD</option>
					<option value="16X20">16X20 $305.00 CAD</option>
					<option value="20X24">20X24 $360.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"busiest international bridge crossing":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="Z435YGQ65SXJ6" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $150.00 CAD</option>
					<option value="11X14">11X14 $225.00 CAD</option>
					<option value="16X20">16X20 $295.00 CAD</option>
					<option value="20X24">20X24 $350.00 CAD</option>
					<option value="20X30">20X30 $415.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"ambassador bridge":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="GLEDRUFYSFH5U" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $150.00 CAD</option>
					<option value="11X14">11X14 $225.00 CAD</option>
					<option value="16X20">16X20 $295.00 CAD</option>
					<option value="20X24">20X24 $350.00 CAD</option>
					<option value="20X30">20X30 $415.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"remarkable colored sun":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="S28K5KK7F3YLY" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"resort spa ceiling":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="YTPT38JZXJ8JC" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $150.00 CAD</option>
					<option value="11X14">11X14 $225.00 CAD</option>
					<option value="16X20">16X20 $295.00 CAD</option>
					<option value="20X24">20X24 $350.00 CAD</option>
					<option value="20X30">20X30 $415.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"remnants of destroyed mill":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="LKTYVTG9L23HS" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $150.00 CAD</option>
					<option value="11X14">11X14 $225.00 CAD</option>
					<option value="16X20">16X20 $295.00 CAD</option>
					<option value="20X24">20X24 $350.00 CAD</option>
					<option value="20X30">20X30 $415.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"view along the river":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="KC27KKCVG5HWW" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"river rapids":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="AG5T5JBGBQBWY" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"old fishing camp on the river":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="Z2F9M9BZXSHRW" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $165.00 CAD</option>
					<option value="11X14">11X14 $235.00 CAD</option>
					<option value="16X20">16X20 $305.00 CAD</option>
					<option value="20X24">20X24 $360.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"lazy river":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="NJLP2UY4G65RG" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"fallen tree in the lake":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="TVCYKY5KDX9V8" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $165.00 CAD</option>
					<option value="11X14">11X14 $235.00 CAD</option>
					<option value="16X20">16X20 $305.00 CAD</option>
					<option value="20X24">20X24 $360.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"canadian geese waddling":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="QEDJ45C5DRQEE" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $110.00 CAD</option>
					<option value="11X14">11X14 $150.00 CAD</option>
					<option value="16X20">16X20 $195.00 CAD</option>
					<option value="20X24">20X24 $235.00 CAD</option>
					<option value="20X30">20X30 $285.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"canadian geese":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="3MFMDSQHP373S" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $110.00 CAD</option>
					<option value="11X14">11X14 $150.00 CAD</option>
					<option value="16X20">16X20 $195.00 CAD</option>
					<option value="20X24">20X24 $235.00 CAD</option>
					<option value="20X30">20X30 $285.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"centuries old highschool":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="5GHRADEYJHQ3W" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	//"centuries old highschool" : '',
	"abandoned mansion old spa":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="5SE3S6ANVAKDU" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"sunrise in agawa":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="E9VRNTKW9VWHE" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	//"sunrise in agawa" : '',
	"agawa mountainside waterfall":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="4PLMCJSR5JQGW" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $165.00 CAD</option>
					<option value="11X14">11X14 $240.00 CAD</option>
					<option value="16X20">16X20 $300.00 CAD</option>
					<option value="20X24">20X24 $365.00 CAD</option>
					<option value="20X30">20X30 $405.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"agawa waterfall with special filter":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="34KMHDVP2C9GJ" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $165.00 CAD</option>
					<option value="11X14">11X14 $240.00 CAD</option>
					<option value="16X20">16X20 $300.00 CAD</option>
					<option value="20X24">20X24 $365.00 CAD</option>
					<option value="20X30">20X30 $405.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"mercury filter truck approaching sunset":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="9GXSKGW7NQFHE" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"walking trail deep in the forest":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="KDZ972RY7ZASG" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $150.00 CAD</option>
					<option value="11X14">11X14 $225.00 CAD</option>
					<option value="16X20">16X20 $295.00 CAD</option>
					<option value="20X24">20X24 $350.00 CAD</option>
					<option value="20X30">20X30 $415.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"black and white river view":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="GKZUL7F924XAA" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $165.00 CAD</option>
					<option value="11X14">11X14 $235.00 CAD</option>
					<option value="16X20">16X20 $305.00 CAD</option>
					<option value="20X24">20X24 $360.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"merry christmas tree":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="H4QBE752L3R4U" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"trail along the shore":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="7DERQUBBMMLE2" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $170.00 CAD</option>
					<option value="11X14">11X14 $245.00 CAD</option>
					<option value="16X20">16X20 $310.00 CAD</option>
					<option value="20X24">20X24 $370.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"mill destroyed on the grand":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="K4646AXB3V3Q2" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $165.00 CAD</option>
					<option value="11X14">11X14 $235.00 CAD</option>
					<option value="16X20">16X20 $305.00 CAD</option>
					<option value="20X24">20X24 $360.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"rail tracks":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="7VK4RJHLKHUUE" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"sunset":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="HPE2J6RWQ7WFE" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $150.00 CAD</option>
					<option value="11X14">11X14 $225.00 CAD</option>
					<option value="16X20">16X20 $295.00 CAD</option>
					<option value="20X24">20X24 $350.00 CAD</option>
					<option value="20X30">20X30 $415.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"long shot of rail bridge":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="ALFU4NFDHB5VU" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $180.00 CAD</option>
					<option value="11X14">11X14 $250.00 CAD</option>
					<option value="16X20">16X20 $315.00 CAD</option>
					<option value="20X24">20X24 $375.00 CAD</option>
					<option value="20X30">20X30 $435.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"beautiful yellow flowers":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="QTMSU65XNKHSW" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $110.00 CAD</option>
					<option value="11X14">11X14 $150.00 CAD</option>
					<option value="16X20">16X20 $195.00 CAD</option>
					<option value="20X24">20X24 $235.00 CAD</option>
					<option value="20X30">20X30 $285.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"wooden bridge along water":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="KGKZ7T6YX95XU" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $200.00 CAD</option>
					<option value="11X14">11X14 $275.00 CAD</option>
					<option value="16X20">16X20 $350.00 CAD</option>
					<option value="20X24">20X24 $405.00 CAD</option>
					<option value="20X30">20X30 $475.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"rail bridge with train":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="7EQL47EYLF5B8" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $210.00 CAD</option>
					<option value="11X14">11X14 $285.00 CAD</option>
					<option value="16X20">16X20 $365.00 CAD</option>
					<option value="20X24">20X24 $415.00 CAD</option>
					<option value="20X30">20X30 $495.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"picturesque river through the trees":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="K5NCB8EAG96P2" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $180.00 CAD</option>
					<option value="11X14">11X14 $250.00 CAD</option>
					<option value="16X20">16X20 $315.00 CAD</option>
					<option value="20X24">20X24 $375.00 CAD</option>
					<option value="20X30">20X30 $435.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"rustic barn":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="NYPM6QJ4NZPTA" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $170.00 CAD</option>
					<option value="11X14">11X14 $245.00 CAD</option>
					<option value="16X20">16X20 $310.00 CAD</option>
					<option value="20X24">20X24 $370.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"mill destroyed":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="6F6HRHCJR3E9J" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $165.00 CAD</option>
					<option value="11X14">11X14 $235.00 CAD</option>
					<option value="16X20">16X20 $305.00 CAD</option>
					<option value="20X24">20X24 $360.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"winter wonderland":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="WJET2EDTYQA7Y" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $165.00 CAD</option>
					<option value="11X14">11X14 $235.00 CAD</option>
					<option value="16X20">16X20 $305.00 CAD</option>
					<option value="20X24">20X24 $360.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"canada moose in lights":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="A5HGCZ3AGWNML" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $135.00 CAD</option>
					<option value="11X14">11X14 $195.00 CAD</option>
					<option value="16X20">16X20 $250.00 CAD</option>
					<option value="20X24">20X24 $315.00 CAD</option>
					<option value="20X30">20X30 $385.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"rail bridge and water lock":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="A5WUADFYUNFH8" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $150.00 CAD</option>
					<option value="11X14">11X14 $225.00 CAD</option>
					<option value="16X20">16X20 $295.00 CAD</option>
					<option value="20X24">20X24 $350.00 CAD</option>
					<option value="20X30">20X30 $415.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
	"light tunnel":
		(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="hidden" name="hosted_button_id" value="EE6HGZV5F39U8" />
			<table>
				<tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
					<option value="8X10">8X10 $170.00 CAD</option>
					<option value="11X14">11X14 $245.00 CAD</option>
					<option value="16X20">16X20 $310.00 CAD</option>
					<option value="20X24">20X24 $370.00 CAD</option>
					<option value="20X30">20X30 $425.00 CAD</option>
				</select> </td></tr>
			</table>
			<input type="hidden" name="currency_code" value="CAD" />
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>
		),
}

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
	}
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
 }

// (id,title,price,width,imageRef,paybutton)
// new (title,width,refName)
const displaySettings = [
	[1,"Beach front",150,6,bacon,buttonDictionary["beachfront restaurant in mexican riviera"]],
	[2,"centoe",180,6,undefined,buttonDictionary["gorgeous cenote on the gulf of mexico"]],
	[3,"full",20,12,undefined,buttonDictionary["gorgeous cenote on the gulf of mexico"]],
	[4,"third 1",20,4,undefined,buttonDictionary["gorgeous cenote on the gulf of mexico"]],
	[5,"thri",20,4,undefined,buttonDictionary["gorgeous cenote on the gulf of mexico"]],
	[6,"third",20,4,undefined,buttonDictionary["gorgeous cenote on the gulf of mexico"]],
	[7,"full",20,12,undefined,buttonDictionary["gorgeous cenote on the gulf of mexico"]],
	[8,"full",20,12,undefined,buttonDictionary["gorgeous cenote on the gulf of mexico"]],
	[9,"full",20,12,undefined,buttonDictionary["gorgeous cenote on the gulf of mexico"]],
	[10,"full",20,12,undefined,buttonDictionary["gorgeous cenote on the gulf of mexico"]],
	[11,"full",20,12,undefined,buttonDictionary["gorgeous cenote on the gulf of mexico"]],
]

// (refname,width,title)
const displaySettings2 =[
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
	//["beachfront restaurant in mexican riviera",6, "Playa Del Carmen Oceanside Restaurant and Beach"],
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
const displaySettingsVerbose = displaySettings2.map( (ele,index) => {
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

console.log(displaySettingsVerbose)

// const displaySettingsVerboseClean = []
// for(let i =0; i< displaySettingsVerbose.length; i++){
// 	if(displaySettingsVerbose[i] != undefined){
// 		displaySettingsVerboseClean.push(displaySettingsVerbose[i])
// 	}
// }

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



