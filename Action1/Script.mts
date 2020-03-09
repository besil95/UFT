'Garanti Ana Sayfa Kontrolleri'

SystemUtil.Run "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" @@ script infofile_;_ZIP::ssf40.xml_;_
 
 @@ script infofile_;_ZIP::ssf51.xml_;_
Browser("Browser").Navigate "https://www.garantibbva.com.tr/" @@ hightlight id_;_1051180_;_script infofile_;_ZIP::ssf52.xml_;_
Browser("Browser").Page("Garanti BBVA").WebEdit("amountGeneralPurpose").Set "10.000" @@ script infofile_;_ZIP::ssf53.xml_;_
Browser("Browser").Page("Garanti BBVA").Link("60").Click @@ script infofile_;_ZIP::ssf54.xml_;_
Browser("Browser").Page("Garanti BBVA").Link("6").Click
Browser("Browser").Page("Garanti BBVA").WebElement("Taksit").Highlight


msgbox Browser("Browser").Page("Garanti BBVA").WebElement("Taksit").GetROProperty("innertext")
value = Browser("Browser").Page("Garanti BBVA").WebElement("Taksit").GetROProperty("xpath") @@ script infofile_;_ZIP::ssf55.xml_;_
msgbox value
