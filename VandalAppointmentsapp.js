Titanium.UI.setBackgroundColor('#fff');
//WINDOWS
var win1 = Titanium.UI.createWindow({  //Windows
    text: 'Vandal Appointments',
    backgroundColor: 'fff'
});
var scheduleWindow = Ti.UI.createWindow({
	text:'MySchedule',
	fontFamily: 'Museo Slab',
	backgroundColor:'#fff'
});
var makeappointmentWindow = Ti.UI.createWindow({
	text:'Make Appointment',
	fontFamily: 'Museo Slab',
	
});
//var studentsearch = Ti.UI.createTextField({
 // borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  //color: '#9f9d9d',
  //top: '30%', 
  //width: '35%', 
  //height: '5%'
//});

var transformPicker = Titanium.UI.create2DMatrix().scale(0.35);
var profpicker = Ti.UI.createPicker({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#9f9d9d',
	top: '30%',
	width: '60%',
	height: '5%',
	transform:transformPicker
});
var data = [];
	data.push(Titanium.UI.createPickerRow({title:'Select Professor'}));
	data.push(Titanium.UI.createPickerRow({title:'Professor1'}));
	data.push(Titanium.UI.createPickerRow({title:'Professor2'}));
	data.push(Titanium.UI.createPickerRow({title:'Professor3'}));
	data.push(Titanium.UI.createPickerRow({title:'Professor4'}));
	profpicker.add(data);

var studpicker = Ti.UI.createPicker({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#9f9d9d',
	top: '14.5%',
	width: '60%',
	height: '5%',
	transform:transformPicker
});
var data = [];
	data.push(Titanium.UI.createPickerRow({title:'Select Student'}));
	data.push(Titanium.UI.createPickerRow({title:'Student1'}));
	data.push(Titanium.UI.createPickerRow({title:'Student2'}));
	data.push(Titanium.UI.createPickerRow({title:'Student3'}));
	data.push(Titanium.UI.createPickerRow({title:'Student4'}));
	studpicker.add(data);

var timepicker = Ti.UI.createPicker({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#9f9d9d',
	top: '47%',
	width: '60%',
	height: '5%',
	transform:transformPicker
});
var data = [];
	data.push(Titanium.UI.createPickerRow({title:'Select Time'}));
	data.push(Titanium.UI.createPickerRow({title:'Monday 8:00-9:00am'}));
	data.push(Titanium.UI.createPickerRow({title:'Monday 9:00-10:00am'}));
	data.push(Titanium.UI.createPickerRow({title:'Monday 10:00-11:00am'}));
	data.push(Titanium.UI.createPickerRow({title:'Monday 11:00-12:00pm'}));
	timepicker.add(data);

var studentsearchLabelView = Ti.UI.createView({
	top: '25%',
	left: '20%',
	height: '15%',
	width: '80%',
});
var studentsearchLabel = Ti.UI.createLabel({
	textAlign: 'center',
	top: '24.2%',
	width: '95%',
	text: 'Student List',
	font:{
		fontSize:'10sp',
		fontWeight:'bold',
		fontFamily: 'Helvetica Neue',
	}	
});
//var profsearch = Ti.UI.createTextField({
  //borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  //color: '#9f9d9d',
  //top: '45%', 
  //width: '35%', 
  //height: '5%'
//});
var profLabelView = Ti.UI.createView({
	top: '40%',
	left: '20%',
	height: '15%',
	width: '80%',
});
var profLabel = Ti.UI.createLabel({
	textAlign: 'center',
	top: '40%',
	width: '95%',
	text: 'Professor List',
	font:{
		fontSize:'10sp',
		fontWeight:'bold',
		fontFamily: 'Helvetica Neue',
	}	
});
//var timesearch = Ti.UI.createTextField({
  //borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  //color: '#9f9d9d',
  //top: '60%', 
  //width: '35%', 
  //height: '5%'
//});
var timesearchLabelView = Ti.UI.createView({
	top: '57%',
	left: '20%',
	height: '15%',
	width: '80%',
});
var timesearchLabel = Ti.UI.createLabel({
	textAlign: 'center',
	top: '57%',
	width: '95%',
	text: 'Time Select',
	font:{
		fontSize:'10sp',
		fontWeight:'bold',
		fontFamily: 'Helvetica Neue',
}});
var submitButton =Ti.UI.createButton({
	title: 'Submit',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		top: '75%',
		width:'30%',
		height: '5%',
		borderColor: 'black',							
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Helvetica Neue',
}
});
//APPOINTMENT LIST TABLE
var tableData = [];
	tableData[0] = 'Time1- Appointment 1: Student 1'; 
	tableData[1] = 'Time2- Appointment 2: Student 2'; 
	tableData[2] = 'Time3- Appointment 3: Student 3'; 
	tableData[3] = 'Time4- Appointment 4: Student 4';
	tableData[4] = 'Time5- Appointment 5: Student 5';
	tableData[5] = 'Time6- Appointment 6: Student 6';
	tableData[6] = 'Time7- Appointment 7: Student 7';
		
//creating an empty array to store the rows in
var rowViewData = [];
//this function is binding the rows together with the background color. Custom Trait of cbeTag to keep track of each entry
function bindRowData (){
for (var i=0; i<tableData.length; i++) {
var rowView = Ti.UI.createTableViewRow({
	title: tableData[i],
		font: 'Helvetica Neue',
		fontSize: '10sp',
	height:45,
	backgroundColor: '#9f9d9d',
	fontColor: 'black',
	fontSize: '10sp',
	cbeTag: i
});
//Pushing the row data into the finished array
rowViewData.push(rowView);
}
return rowViewData;
}
/*Simply put, adds the above data to the table. */
var table1 = Ti.UI.createTableView({
	headerTitle: 'My Appointments',
	headerfontStyle: 'Helvetica Neue',
	headerfontSize: '12sp',
	data: bindRowData(),
	top: '22%',
	bottom: '15%',
	width: '80%',
	left: 0,
	
		
});
var cancelWindow = Ti.UI.createWindow({
	text:'Cancel Appointment or Block Time',
	fontFamily: 'Museo Slab',
	backgroundColor:'#fff'
});
var appointmentlistWindow = Ti.UI.createWindow({
	text:'Appointment List',
	fontFamily: 'Museo Slab',
	backgroundColor:'#fff'
});
//TITLES FOR DIFFERENT TABS
var titleView = Ti.UI.createView({		//Titles
	top: '3.1%',
	backgroundColor: 'black',
	height: '17%',
	width: '100%',	
});
var titleLabel = Ti.UI.createLabel({
	text:'Vandal Appointments',
	textAlign: 'center',
	color: 'b18e5f',
	height: Ti.UI.FILL,
	font:{
			fontSize:'14sp',
			fontWeight:'bold',
			fontFamily: 'Helvetica Neue',
	}									
});
var scheduleTitleView = Ti.UI.createView({
	top: '3.1%',
	backgroundColor: 'black',
	height:'17%',
	width: '100%',
});
var scheduleTitleLabel = Ti.UI.createLabel({
	text:'My Schedule',
	textAlign: 'center',
	color: '#b18e5f',
	height:Ti.UI.FILL,
	font:{
		fontSize:'14sp',
		fontWeight:'bold',
		fontFamily: 'Helvetica Neue',
	}
});
var makeappointmentTitleView = Ti.UI.createView({
	top: '3.1%',
	backgroundColor: 'black',
	height:'17%',
	width: '100%',
});
var makeappointmentTitleLabel = Ti.UI.createLabel({
	text:'Make Appointment',
	color: '#b18e5f',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'14sp',
		fontWeight:'bold',
		fontFamily: 'Helvetica Neue',
	}
});
var cancelTitleView = Ti.UI.createView({
	top: '3.1%',
	backgroundColor: 'black',
	height:'17%',
	width: '100%',
});
var cancelTitleLabel = Ti.UI.createLabel({
	text:'Cancel Appointment \n or Block Time',
	color: '#b18e5f',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'14sp',
		fontWeight:'bold',
		fontFamily: 'Helvetica Neue',
	}
});
var appointmentlistTitleView = Ti.UI.createView({
	top: '3.1%',
	backgroundColor: 'black',
	height:'17%',
	width: '100%',
});
var appointmentlistTitleLabel = Ti.UI.createLabel({
	text:'Appointment List',
	color: '#b18e5f',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'14sp',
		fontWeight:'bold',
		fontFamily: 'Helvetica Neue',
	}
});
// BLURBS AND VIEWS
var returnView = Ti.UI.createView({		//ButtonViews
	bottom: '0',
	left: 0,
	height:'10%',
	width:'100%',
	backgroundColor:'black'
});
var scheduleView = Ti.UI.createView({		
	height: '20%',
	width: '20%',
	left: 0,
	top: '20%'
});
var makeappointmentView = Ti.UI.createView({
	height: '20%',
	width: '20%',
	left: 0,
	top: '40%'
});
var cancelView = Ti.UI.createView({
	height: '20%',
	width: '20%',
	left: 0,
	top: '60%'
});
var appointmentlistView = Ti.UI.createView({
	height: '20%',
	width: '20%',
	left: 0,
	top: '80%'
});
var blurbView = Ti.UI.createView({
	top: '22%',
	left: '20%',
	height: '75%',
	width: '80%',
});	
var scheduleWindView = Ti.UI.createView({
	height: '70%',
	width: '100%',
	top: '20%',
	bottom: '5%',
});	
var blurbLabel = Ti.UI.createLabel({		
	textAlign: 'center',
	top: '5%',
	width: '95%',
	text: 'Welcome to University of Idaho’s Advising and Appointment app. This app was developed to make communication between faculty and students simpler and more integrated. Read below for a brief explanation of features. Go Vandals. \n \n \nNavigation of App',
	font:{
		fontSize:'10sp',
		fontWeight:'bold',
		fontFamily: 'Helvetica Neue',
	}	
});
var blurbLabel2 = Ti.UI.createLabel({		
	textAlign: 'center',
	top: '28%',
	width: '95%',
	text: 'For Professors: \nClick the “Schedule” tab to view scheduled appointments. \n Click the "Create" tab to schedule a new appointment with a student. \nClick the “Cancel” tab to cancel existing appointments or to make specific times unavailable. \nClick the “List” tab to view upcoming appointments. \n \nFor Students: \nClick the “Schedule” tab to view scheduled appointments. \n Click the "Create" tab to schedule a new appointment with a faculty member. \nClick the “Cancel” tab to cancel existing appointments or to make specific times unavailable. \nClick the “List” tab to view upcoming appointments. \n \nContact University of Idaho ITS for troubleshooting or to report an error.',
	font:{
		fontSize:'9sp',
		fontWeight:'Regular',
		fontFamily: 'Helvetica Neue',
	}	
});
var scheduleButton = Ti.UI.createButton({			//Buttons
	title: 'Schedule',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#b18e5f',							
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Museo Slab',
		},
		backgroundColor:'black'
});
var makeappointmentButton = Ti.UI.createButton({
	title:'Create',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#b18e5f',
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Museo Slab',
		},
		backgroundColor:'black'
});
var cancelButton = Ti.UI.createButton({
	title:'Cancel',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#b18e5f',
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Museo Slab',
		},
		backgroundColor:'black'
});
var appointmentlistButton = Ti.UI.createButton({
	title:'List',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#b18e5f',
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Museo Slab',
		},
		backgroundColor:'black'
});
var returnButton = Ti.UI.createButton({
	title:'Return',
	color:'black',
	borderRadius: 10,
	height:Ti.UI.FILL,
	width:'15%',
	height:'100%',
	left: 0,
	bordercolor:'black',
	backgroundColor: '#9f9d9d',
	textAlign:'center',
	font:{
		fontSize:'10sp',
		fontWeight:'bold',
		fontFamily: 'Museo Slab',
	},
	backgroundcolor:'#333333'
});
//EVENT LISTENERS
scheduleButton.addEventListener('click', function(e){			//Event Listeners
	win1.close();
	scheduleWindow.close();
	makeappointmentWindow.close();
	cancelWindow.close();
	appointmentlistWindow.close();
	scheduleWindow.open();
	
});
makeappointmentButton.addEventListener('click', function(e){
	win1.close();
	scheduleWindow.close();
	makeappointmentWindow.close();
	cancelWindow.close();
	appointmentlistWindow.close();
	makeappointmentWindow.open();
});
cancelButton.addEventListener('click', function(e){
	win1.close();
	scheduleWindow.close();
	makeappointmentWindow.close();
	cancelWindow.close();
	appointmentlistWindow.close();
	cancelWindow.open();
});
appointmentlistButton.addEventListener('click', function(e){
	win1.close();
	scheduleWindow.close();
	makeappointmentWindow.close();
	cancelWindow.close();
	appointmentlistWindow.close();
	appointmentlistWindow.open();
});
returnButton.addEventListener('click', function(e){
	win1.open();
});
// IMAGES
var homescreenImage = Ti.UI.createImageView({				//HOME SCREEN
	top:'7%',
	width:'19%',
	height: '10%',
	left:'3%',
	image: '/images/UI_Seal_gold.png'
});
var homescreenImage2 = Ti.UI.createImageView({				//HOME SCREEN
	top:'7%',
	width:'19%',
	height: '10%',
	left:'78%',
	image: '/images/UI_Seal_gold.png'
});
var cornerImage = Ti.UI.createImageView({				//HOME SCREEN
		top:'7%',
	width:'19%',
	height: '10%',
	left:'3%',
	image: '/images/UI_Seal_black.png'
});
var cornerImage2 = Ti.UI.createImageView({				//HOME SCREEN
	top:'7%',
	width:'19%',
	height: '10%',
	left:'78%',
	image: '/images/UI_Seal_black.png'
});				
var schedulepic = Ti.UI.createImageView({
	top: '25%',
	height: '60%',
	width: '95%',
	image: '/images/7-day-schedule-template-761.png',
});
var bottombanner = Ti.UI.createImageView({
	top: '10%',
	left: '15%',
	Height: '68%',
	width: '85%',
	image: '/images/ui_logo_white.png'
});
var vandalhome1 = Ti.UI.createImageView({
	top: '90%',
	left: '35%',
	height: '10%',
	width: '50%',
	image: '/images/ID_STACKED_1cspot.jpg'
});
var cancel1Button =Ti.UI.createButton({
	title: 'Cancel Appointment',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		top: '75%',
		width:'35%',
		height: '5%',
		left: '10%',
		borderColor: 'black',							
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Helvetica Neue',
}
});
var blockButton =Ti.UI.createButton({
	title: 'Block Time',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		top: '75%',
		width:'35%',
		height: '5%',
		left: '55%',
		borderColor: 'black',							
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Helvetica Neue',
}
});

var delete1Button =Ti.UI.createButton({
	title: 'Cancel',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		top: '27%',
		width:'20%',
		height: '7.9%',
		right: 0,
		borderColor: 'black',							
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Helvetica Neue',
}
});
var delete2Button =Ti.UI.createButton({
	title: 'Cancel',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		top: '34.9%',
		width:'20%',
		height: '7.9%',
		right: 0,
		borderColor: 'black',							
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Helvetica Neue',
}
});
var delete3Button =Ti.UI.createButton({
	title: 'Cancel',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		top: '42.8%',
		width:'20%',
		height: '7.9%',
		right: 0,
		borderColor: 'black',							
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Helvetica Neue',
}
});
var delete4Button =Ti.UI.createButton({
	title: 'Cancel',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		top: '50.7%',
		width:'20%',
		height: '7.9%',
		right: 0,
		borderColor: 'black',							
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Helvetica Neue',
}
});
var delete5Button =Ti.UI.createButton({
	title: 'Cancel',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		top: '58.6%',
		width:'20%',
		height: '7.9%',
		right: 0,
		borderColor: 'black',							
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Helvetica Neue',
}
});
var delete6Button =Ti.UI.createButton({
	title: 'Cancel',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		top: '66.5%',
		width:'20%',
		height: '7.9%',
		right: 0,
		borderColor: 'black',							
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Helvetica Neue',
}
});
var delete7Button =Ti.UI.createButton({
	title: 'Cancel',
		color:'#b18e5f',
		height:Ti.UI.FILL,
		top: '74.4%',
		width:'20%',
		height: '7.9%',
		right: 0,
		borderColor: 'black',							
		textAlign:'Center',
		font:{
			fontSize:'10sp',
			fontWeight:'bold',
			fontFamily: 'Helvetica Neue',
}
});
appointmentlistWindow.add(delete1Button);
appointmentlistWindow.add(delete2Button);
appointmentlistWindow.add(delete3Button);
appointmentlistWindow.add(delete4Button);
appointmentlistWindow.add(delete5Button);
appointmentlistWindow.add(delete6Button);
appointmentlistWindow.add(delete7Button);

//ADD FUNCTIONS
cancelWindow.add(blockButton);
cancelWindow.add(cancel1Button);
win1.add(vandalhome1);
win1.open();
win1.add(titleView);
titleView.add(titleLabel);
win1.add(scheduleView);
win1.add(makeappointmentView);
win1.add(cancelView);
win1.add(appointmentlistView);
win1.add(blurbView);
win1.add(homescreenImage);
win1.add(homescreenImage2);
scheduleWindow.add(returnView);
makeappointmentWindow.add(returnView);
cancelWindow.add(returnView);
appointmentlistWindow.add(returnView);
scheduleWindow.add(scheduleTitleView);
makeappointmentWindow.add(makeappointmentTitleView);
cancelWindow.add(cancelTitleView);
appointmentlistWindow.add(appointmentlistTitleView);
scheduleWindow.add(scheduleWindView);
scheduleWindow.add(scheduleWindView);
makeappointmentWindow.add(studentsearchLabelView);
makeappointmentWindow.add(studentsearchLabel);
makeappointmentWindow.add(profLabelView);
makeappointmentWindow.add(profLabel);

blurbView.add(blurbLabel);
blurbView.add(blurbLabel2);
scheduleView.add(scheduleButton);
makeappointmentView.add(makeappointmentButton);
cancelView.add(cancelButton);
appointmentlistView.add(appointmentlistButton);
returnView.add(returnButton);
scheduleTitleView.add(scheduleTitleLabel);
makeappointmentTitleView.add(makeappointmentTitleLabel);
cancelTitleView.add(cancelTitleLabel);
appointmentlistTitleView.add(appointmentlistTitleLabel);
scheduleWindow.add(schedulepic);
appointmentlistWindow.add(table1);
scheduleWindow.add(cornerImage);
scheduleWindow.add(cornerImage2);
makeappointmentWindow.add(cornerImage);	
makeappointmentWindow.add(cornerImage2);
cancelWindow.add(cornerImage);
cancelWindow.add(cornerImage2);
appointmentlistWindow.add(cornerImage);
appointmentlistWindow.add(cornerImage2);
cancelWindow.add(timesearchLabelView);
cancelWindow.add(timesearchLabel);

//cancelWindow.add(timesearch);
cancelWindow.add(profLabelView);
cancelWindow.add(profLabel);
//cancelWindow.add(profsearch);
cancelWindow.add(studentsearchLabelView);
cancelWindow.add(studentsearchLabel);
makeappointmentWindow.add(timesearchLabelView);
makeappointmentWindow.add(timesearchLabel);
//makeappointmentWindow.add(studentsearch);
//makeappointmentWindow.add(timesearch);
makeappointmentWindow.add(submitButton);
scheduleWindow.add(cornerImage);
scheduleWindow.add(cornerImage2);
makeappointmentWindow.add(cornerImage);	
makeappointmentWindow.add(cornerImage2);
cancelWindow.add(cornerImage);
cancelWindow.add(cornerImage2);
appointmentlistWindow.add(cornerImage);
appointmentlistWindow.add(cornerImage2);
returnView.add(bottombanner);
cancelWindow.add(profpicker);
cancelWindow.add(studpicker);
makeappointmentWindow.add(profpicker);
makeappointmentWindow.add(studpicker);
cancelWindow.add(timepicker);
makeappointmentWindow.add(timepicker);
