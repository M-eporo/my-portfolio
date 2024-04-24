var circle = new ProgressBar.Circle("#splash_text",{
	strokeWidth: 4.0,
	duration: 1500,
	trailColor: "#fff",
	trailWidth: 3.0,
	easing: "easeInOut",
	fill: '#fff',
	text: {
		style: {
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '0',
			transform: 'translate(-50%, -50%)',
			'font-size': '1.8rem',
      'font-weight': 'bold',
			color: '#888'
		},
		autoStyleContainer: false
	},
	
	
	step: function(state, circle, attachment){
		circle.setText(Math.round(circle.value() * 100) + ' %');
		circle.path.setAttribute("stroke", state.color);
	}
});
var opts = {
	from: { color: '#fff'},
   	to: { color: '#888'}
};

circle.animate(1.0, opts, function() {
  $("#splash").delay(500).fadeOut(400);
});