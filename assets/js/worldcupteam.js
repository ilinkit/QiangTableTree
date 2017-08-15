(function($) {
  'use strict';
  $(function() {
	var treeData = {
		name:'2014 FIFA World Cup',
		value:{},
		children:[
			{
				name:'Group A',
				value:{},
				children:[
					{
						name:'Brazil',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Brazil.svg', 'Pld':3, 'W':2, 'D':1, 'L':0, 'GF':7, 'GA':2, 'GD':'+5', 'Pts':7},
						children:[]
					},
					{
						name:'Mexico',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Mexico.svg', 'Pld':3, 'W':2, 'D':1, 'L':0, 'GF':4, 'GA':1, 'GD':'+3', 'Pts':7},
						children:[]
					},
					{
						name:'Croatia',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Croatia.svg', 'Pld':3, 'W':1, 'D':0, 'L':2, 'GF':6, 'GA':6, 'GD':'0', 'Pts':3},
						children:[]
					},
					{
						name:'Cameroon',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Cameroon.svg', 'Pld':3, 'W':0, 'D':0, 'L':3, 'GF':1, 'GA':9, 'GD':'-8', 'Pts':0},
						children:[]
					}					
				]
			},
			{
				name:'Group B',
				value:{},
				children:[
					{
						name:'Netherlands',
						value:{ 'isTeam' : true , 'flag':'Flag_of_the_Netherlands.svg', 'Pld':3, 'W':3, 'D':0, 'L':0, 'GF':10, 'GA':3, 'GD':'+7', 'Pts':9},
						children:[]
					},
					{
						name:'Chile',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Chile.svg', 'Pld':3, 'W':2, 'D':0, 'L':1, 'GF':5, 'GA':3, 'GD':'+2', 'Pts':6},
						children:[]
					},
					{
						name:'Spain',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Spain.svg', 'Pld':3, 'W':1, 'D':0, 'L':2, 'GF':4, 'GA':7, 'GD':'-3', 'Pts':3},
						children:[]
					},
					{
						name:'Australia',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Australia.svg', 'Pld':3, 'W':0, 'D':3, 'L':3, 'GF':3, 'GA':9, 'GD':'-6', 'Pts':0},
						children:[]
					}					
				]
				
			},
			{
				name:'Group C',
				value:{},
				children:[
					{
						name:'Colombia',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Colombia.svg', 'Pld':3, 'W':3, 'D':0, 'L':0, 'GF':9, 'GA':2, 'GD':'+7', 'Pts':9},
						children:[]
					},
					{
						name:'Greece',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Greece.svg', 'Pld':3, 'W':1, 'D':1, 'L':1, 'GF':2, 'GA':4, 'GD':'-2', 'Pts':4},
						children:[]
					},
					{
						name:'Ivory Coast',
						value:{ 'isTeam' : true , 'flag':'Flag_of_C_te_d_Ivoire.svg', 'Pld':3, 'W':1, 'D':0, 'L':2, 'GF':4, 'GA':5, 'GD':'-1', 'Pts':3},
						children:[]
					},
					{
						name:'Japan',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Japan.svg', 'Pld':3, 'W':0, 'D':1, 'L':2, 'GF':2, 'GA':6, 'GD':'-4', 'Pts':1},
						children:[]
					}					
				]
			},
			{
				name:'Group D',
				value:{},
				children:[
					{
						name:'Costa Rica',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Costa_Rica.svg', 'Pld':3, 'W':2, 'D':1, 'L':0, 'GF':4, 'GA':1, 'GD':'+3', 'Pts':7},
						children:[]
					},
					{
						name:'Uruguay',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Uruguay.svg', 'Pld':3, 'W':2, 'D':0, 'L':1, 'GF':4, 'GA':4, 'GD':'0', 'Pts':6},
						children:[]
					},
					{
						name:'Italy',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Italy.svg', 'Pld':3, 'W':1, 'D':0, 'L':2, 'GF':2, 'GA':3, 'GD':'-1', 'Pts':3},
						children:[]
					},
					{
						name:'England',
						value:{ 'isTeam' : true , 'flag':'Flag_of_England.svg', 'Pld':3, 'W':0, 'D':1, 'L':2, 'GF':2, 'GA':4, 'GD':'-2', 'Pts':1},
						children:[]
					}					
				]
			},
			{
				name:'Group E',
				value:{},
				children:[
					{
						name:'France',
						value:{ 'isTeam' : true , 'flag':'Flag_of_France.svg', 'Pld':3, 'W':2, 'D':1, 'L':0, 'GF':8, 'GA':2, 'GD':'+6', 'Pts':7},
						children:[]
					},
					{
						name:'Switzerland',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Switzerland.svg', 'Pld':3, 'W':2, 'D':0, 'L':1, 'GF':7, 'GA':6, 'GD':'+1', 'Pts':6},
						children:[]
					},
					{
						name:'Ecuador',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Ecuador.svg', 'Pld':3, 'W':1, 'D':1, 'L':1, 'GF':3, 'GA':3, 'GD':'0', 'Pts':4},
						children:[]
					},
					{
						name:'Honduras',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Honduras.svg', 'Pld':3, 'W':0, 'D':0, 'L':3, 'GF':1, 'GA':8, 'GD':'-7', 'Pts':0},
						children:[]
					}					
				]
			},
			{
				name:'Group F',
				value:{},
				children:[
					{
						name:'Argentina',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Argentina.svg', 'Pld':3, 'W':3, 'D':0, 'L':0, 'GF':6, 'GA':3, 'GD':'+3', 'Pts':9},
						children:[]
					},
					{
						name:'Nigeria',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Nigeria.svg', 'Pld':3, 'W':1, 'D':1, 'L':1, 'GF':3, 'GA':3, 'GD':'0', 'Pts':4},
						children:[]
					},
					{
						name:'Bosnia and Herzegovina',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Bosnia_and_Herzegovina.svg', 'Pld':3, 'W':1, 'D':0, 'L':2, 'GF':4, 'GA':4, 'GD':'0', 'Pts':3},
						children:[]
					},
					{
						name:'Iran',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Iran.svg', 'Pld':3, 'W':0, 'D':1, 'L':2, 'GF':1, 'GA':4, 'GD':'-3', 'Pts':1},
						children:[]
					}					
				]
			},
			{
				name:'Group G',
				value:{},
				children:[
					{
						name:'Germany',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Germany.svg', 'Pld':3, 'W':2, 'D':1, 'L':0, 'GF':7, 'GA':2, 'GD':'+5', 'Pts':7},
						children:[]
					},
					{
						name:'United States',
						value:{ 'isTeam' : true , 'flag':'Flag_of_the_United_States.svg', 'Pld':3, 'W':1, 'D':1, 'L':1, 'GF':4, 'GA':4, 'GD':'0', 'Pts':4},
						children:[]
					},
					{
						name:'Portugal',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Portugal.svg', 'Pld':3, 'W':1, 'D':1, 'L':1, 'GF':4, 'GA':7, 'GD':'-3', 'Pts':4},
						children:[]
					},
					{
						name:'Ghana',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Ghana.svg', 'Pld':3, 'W':0, 'D':1, 'L':2, 'GF':4, 'GA':6, 'GD':'-2', 'Pts':1},
						children:[]
					}					
				]
			},
			{
				name:'Group H',
				value:{},
				children:[
					{
						name:'Belgium',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Belgium_(civil).svg', 'Pld':3, 'W':3, 'D':0, 'L':0, 'GF':4, 'GA':1, 'GD':'+3', 'Pts':9},
						children:[]
					},
					{
						name:'Algeria',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Algeria.svg', 'Pld':3, 'W':1, 'D':1, 'L':1, 'GF':6, 'GA':5, 'GD':'+1', 'Pts':4},
						children:[]
					},
					{
						name:'Russia',
						value:{ 'isTeam' : true , 'flag':'Flag_of_Russia.svg', 'Pld':3, 'W':0, 'D':2, 'L':1, 'GF':2, 'GA':3, 'GD':'-1', 'Pts':2},
						children:[]
					},
					{
						name:'South Korea',
						value:{ 'isTeam' : true , 'flag':'Flag_of_South_Korea.svg', 'Pld':3, 'W':0, 'D':1, 'L':2, 'GF':3, 'GA':6, 'GD':'-3', 'Pts':1},
						children:[]
					}					
				]
			}
			
		]
	}
	
	var QTT = window.QTT.qiangTableTree( {
		TreeBox : $('#qiang-table-tree'),
		createNodeIconHTML: function( nodeObj ){
			return '';
		}, 
		createNodeNameHTML: function( nodeObj ){
			var valueObj = nodeObj.value ;
			var flagName = '' ;
			if( valueObj.isTeam ){
				flagName = '<img class="flag-img" src="assets/images/'+valueObj.flag+'.png" />' 
			}
			return flagName + nodeObj.name ;
		},		
		createNodeBarHTML: function( nodeObj ){
			return '' ;
		},    
		createNodeValueHTML: function( nodeObj ){
			var valueHTML = '';
			var valueObj = nodeObj.value ;
			if( valueObj.isTeam ){
				valueHTML =    '<li class="td-1">'+(valueObj.Pld  )+'</li>'
							 + '<li class="td-2">'+(valueObj.W )+'</li>' 
							 + '<li class="td-3">'+(valueObj.D )+'</li>' 
							 + '<li class="td-4">'+(valueObj.L )+'</li>' 
							 + '<li class="td-5">'+(valueObj.GF )+'</li>' 
							 + '<li class="td-6">'+(valueObj.GA )+'</li>' 
							 + '<li class="td-7">'+(valueObj.GD )+'</li>' 
							 + '<li class="td-8">'+(valueObj.Pts )+'</li>' ;
			}
			else{
				valueHTML =  '<li class="td-1">&nbsp;</li>'
							 + '<li class="td-2">&nbsp;</li>'
							 + '<li class="td-3">&nbsp;</li>'
							 + '<li class="td-4">&nbsp;</li>'
							 + '<li class="td-5">&nbsp;</li>'
							 + '<li class="td-6">&nbsp;</li>'
							 + '<li class="td-7">&nbsp;</li>'
							 + '<li class="td-8">&nbsp;</li>'
			}
			
			return valueHTML ;
		}
	});
	QTT.updateTree( treeData );
	QTT.shrinkAllNode( );
	QTT.expandAllNode( );
	var leafNode = $('.qiang-table-tree .qttLeaf');
	var flagNode = $('.qiang-table-tree .qttLeaf .t-text');
	
	window.treeNodePosition = [];
	flagNode.each( function( index , domObj ){
		window.treeNodePosition.push( {
			x: $(domObj).offset().left + 20,
			y: $(domObj).offset().top + 10 
		} );
	});
	$( window ).resize( function(){
		QTT.resizeFn();
	});
	
	$('#search-input').keydown(function(e){
		if( e.keyCode===13){
			var keyword = $('#search-input').val();
			if( keyword !== '' ){
				var resultArray = QTT.findNode( keyword );
				if( resultArray.length > 0  ){
					QTT.highlightNode( resultArray );
					QTT.expandToNode( resultArray );
				}
			}
			return ;
		}
	});

  });
})(jQuery);