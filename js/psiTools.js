var psiTools = {
	totalBytes : function(psiResults){
		var sum = 0;
		for(stat of psiResults.pageStats){
			sum += parseInt(stat);
		}
		return sum;
	},

	ruleList : function(psiResults){
		var rules = [];
		var formattedResults = psiResults.formattedResults;
		for(rule of formattedResults.ruleList){
			rules.push(rule.localizedRuleName);
		}
	}
};
