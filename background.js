// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(function(tabId, change, tab) 
{	
	if (tab.url.indexOf('rottentomatoes.com/m') >= 0)
	{
		// ... show the page action.
		chrome.pageAction.show(tabId);
	}
});