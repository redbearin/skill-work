Your computer might have been infected by a virus! Create a function that finds the viruses in files and removes them from your computer.

Examples
removeVirus("PC Files: spotifysetup.exe, virus.exe, dog.jpg") ➞ "PC Files: spotifysetup.exe, dog.jpg"

removeVirus("PC Files: antivirus.exe, cat.pdf, lethalmalware.exe, dangerousvirus.exe ") ➞ "PC Files: antivirus.exe, cat.pdf"

removeVirus("PC Files: notvirus.exe, funnycat.gif") ➞ "PC Files: notvirus.exe, funnycat.gif")

Notes
Bad files will contain "virus" or "malware", but "antivirus" and "notvirus" will not be viruses.
Return "PC Files: Empty" if there are no files left on the computer.