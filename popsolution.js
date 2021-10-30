//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="Awesome!"
compliments[3]="Right on."
compliments[4]="Great Scott! You got it right!"
compliments[5]="Great Job!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What does Doc Brown use to build his time machine?"
choice1[1]="Aston Martin"
choice1[2]="Delorean"
choice1[3]="Lamborghini"
choice1[4]="Ferrari"

question[2]="What is the name of Doc Brown's sheepdog?"
choice2[1]="Einstein"
choice2[2]="Galileo"
choice2[3]="Tesla"
choice2[4]="Newton"

question[3]="What is the only thing capable of generating the necessary 1.21 GW of electricity Marty needs to get back to the future?"
choice3[1]="volcanic eruption"
choice3[2]="atomic bomb"
choice3[3]="bolt of lightning"
choice3[4]="earthquake"

question[4]="In 1955, people keep referring to Marty as a member of which military division?"
choice4[1]="Air Force"
choice4[2]="Army"
choice4[3]="Navy"
choice4[4]="Coast Guard"

question[5]="What does Lorraine think Marty's name is when they first meet?"
choice5[1]="Calvin"
choice5[2]="Levi"
choice5[3]="Pierre"
choice5[4]="Ralph"

question[6]="What is the device that makes time travel possible?"
choice6[1]="Flexometer"
choice6[2]="Flying Capacitor"
choice6[3]="Flux Capacitor"
choice6[4]="Flexitor"

question[7]="What song does Marty perform at his parent's school dance?"
choice7[1]="Stairway to Heaven"
choice7[2]="Bohemian Rhapsody"
choice7[3]="Good Golly, Miss Molly"
choice7[4]="Johnny B. Goode"

question[8]="What is the name of Marty's band?"
choice8[1]="The Pinheads"
choice8[2]="Gung-ho"
choice8[3]="Flush"
choice8[4]="Dark Horse"

question[9]="Who says 'I hate manure'?"
choice9[1]="Marty"
choice9[2]="Mr. Strickland"
choice9[3]="Calvin"
choice9[4]="Biff"

question[10]="What is the name of the dance Marty's parents have their first kiss at?"
choice10[1]="One Enchanting Evening"
choice10[2]="The Enchantment Under the Sea"
choice10[3]="Magic Under the Sea"
choice10[4]="Sadie Hawkins Dance"

solution[1]="b"
solution[2]="a"
solution[3]="c"
solution[4]="d"
solution[5]="a"
solution[6]="c"
solution[7]="d"
solution[8]="a"
solution[9]="d"
solution[10]="b"
