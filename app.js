var unique;
var totq;
var flag=1;
var ds=1;
var current;
      document.getElementById('MarksIdentity').style.display="none";
      document.getElementById('tab').style.display="none";
  document.getElementById('result').style.display="none";
  document.getElementById('myDIV').style.display="none";
  document.getElementById('btnLogout').style.display="none";
var fireCorAns=[];
var fireQuesId=[];
var candAns=[];
function refresh(){
  document.location.reload();
}
var jqhc=0;
var candQId=[];
var count=1;
    document.getElementById("see").style.display="none";
    document.getElementById("finalDisp").style.display="none";
var para=document.getElementById('p1');
var p=document.getElementById('ps');
var action=document.getElementById("s");
var pane=document.getElementById("pane");
var t=document.getElementById("testIdentity");
t.style.display="none"
document.getElementById("n").style.display="none";
pane.style.display="none";
action.style.display="none";
//para.style.display="none";
(function (){
	var firebaseConfig = {
    apiKey: "AIzaSyC614JekV1h8WBZOgYLU14Kr1m3_Mj20dg",
    authDomain: "finalproject-c714d.firebaseapp.com",
    databaseURL: "https://finalproject-c714d.firebaseio.com",
    projectId: "finalproject-c714d",
    storageBucket: "finalproject-c714d.appspot.com",
    messagingSenderId: "782877446271",
    appId: "1:782877446271:web:125852d4de4a039ddb2f4a",
    measurementId: "G-L5Z8FW8WY0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const txtEmail=document.getElementById('txtEmail');
  const txtPassword=document.getElementById('txtPassword');
  const btnLogin=document.getElementById('btnLogin');
  const btnSignUp=document.getElementById('btnSignUp');
  const btnLogout=document.getElementById('btnLogout');
  btnLogin.addEventListener('click',e=>{
    const email=txtEmail.value;
    const pass=txtPassword.value;
    const auth=firebase.auth();
    const promise=auth.signInWithEmailAndPassword(email,pass);
    promise.then(function(value){
    console.log("clicked here");
    var cjh=document.getElementById('jhc');
    cjh.style.display="none";
    document.getElementById('popo').style.display="none";
    //para.style.display="block";
//    p.innerHTML="Sign In Successful";
  document.getElementById('btnLogout').style.display="block";
    console.log(value);
    unique=email;
    action.style.display="block";
    current=action;
  //  renderQuestion();
  });
    promise.catch(e=>console.log(e.message))
  });
  btnSignUp.addEventListener('click',e=>{
    const email=txtEmail.value;
    const pass=txtPassword.value;
    const auth=firebase.auth();
    const promise=auth.createUserWithEmailAndPassword(email,pass);
    promise.then(function(value){
      p.innerHTML="Sign Up Successful";
    });
   promise.catch(function(value){
      p.innerHTML="Sign Up unsuccessful";
    });
  });
   btnLogout.addEventListener('click',e=>{
    firebase.auth().signOut()});
  firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
      console.log("hello world");
      btnLogout.classList.remove('hide');
      //window.location.reload();
    }else{
      console.log("hello");
      //window.location.reload();
      console.log('not logged in');
      btnLogout.classList.add('hide');
    }
  });
 /* const preObject=document.getElementById('object');

  const	dbRefObject=firebase.database().ref().child('object');

  dbRefObject.on('value',snap=>{
  	preObject.innerText=JSON.stringify(snap.val(),null,3);
  });*/
}());
function give(){
  action.style.display="none";
  p.style.display="none";
  t.style.display="block";
  current=t;
}
var alpha;
var nt;
function  dash(){
  current.style.display="none";
  document.getElementById('s').style.display="block";
}
function gques() {
 unique=document.getElementById('testId').value;
  t.style.display="none";
  action.style.display="none";
 pane.style.display="block";
 current=pane;
    var nq1=document.getElementById('noOfQues').value;
    alpha=Number(nq1)
    if(isNaN(alpha))
    {
      console.log('aaaaaa');
      alert('enter a number in number of questions');
      t.style.display="block";
      current=t;
      action.style.display="none";
      pane.style.display="none";
    }
            var nq1=document.getElementById('noOfQues').value;

var sel=document.getElementById('numq');
console.log('helsel');
  for(var i=1;i<=nq1;i++)
  {
    console.log(i);
    var nopt=document.createElement('option');
    nopt.innerHTML=i;
    nopt.setAttribute('value',i);
    sel.appendChild(nopt);
  }
}
      function submitClick(x,n,y){
        firebase.database().ref(unique+''+n).set({
          a:x
      });
        firebase.database().ref(unique+'RESULT').set({
          RESULT:y
        });
    }

  document.getElementById('n').style.display="none";
  function submit(){


        /*var nq1=document.getElementById('noOfQues').value;

var sel=document.getElementById('numq');
console.log('helsel');
  for(var i=1;i<=5;i++)
  {
    console.log(i);
    var nopt=document.createElement('option');
    nopt.innerHTML=i;
    nopt.setAttribute('value',i);
    sel.appendChild(nopt);
  }
/*var xbut=document.createElement('button');
xbut.innerHTML='Question Number';







var dropit=document.getElementById('qnum');
{
  var newButton=document.createElement("button");
  newButton.innerHTML=i;
  dropit.appendChild(newButton);
  newButton.onclick=function(e)
  {
    biy(e.target.innerHTML);
  }
}
function biy(){
  ;
}
*/



    var n=document.getElementById('numq').value;
    
    var x=document.getElementById('question').value;
    var x1=document.getElementById('o1').value;
    var x2=document.getElementById('o2').value;
    var x3=document.getElementById('o3').value;
    var x4=document.getElementById('o4').value;
    var xc;
    var nq=document.getElementById('noOfQues').value;

 nt=document.getElementById('tim').value;
 console.log(nt);


    var veh=document.getElementsByName("vehicle");
    for(var i=0;i<veh.length;i++)
      {
        console.log('hehe');
        if(veh[i].checked)
        {
          console.log(xc);
          xc=veh[i].value;
          console.log(xc);
        }
      }


    var ar=[-10000];
    var arname=["anu"];
    var obj={
            "question":x,
            "option1":x1,
            "option2":x2,
            "option3":x3,
            "option4":x4,
            "optioncorrect":xc,
            "noQUESTION":nq,
            "time":nt
        };
        var resJSON={
          "sum":0,
          "number":0,
          "highest":0,
          "array":ar,
          "arrayname":arname
        }
        var myRES=JSON.stringify(resJSON);
        var myJSON=JSON.stringify(obj);
    submitClick(myJSON,n,myRES);
    document.getElementById('pane').style.display='none';
    document.getElementById('n').style.display='block';
    current=document.getElementById('n');
    //document.getElementById('show').innerHTML=x;
  }
  function next(){
    document.getElementById('pane').style.display='block';
    current=document.getElementById('pane');
    document.getElementById('myForm').reset();
  }
  function rankList(){
      action.style.display="none";
      p.style.display="none";
      document.getElementById('MarksIdentity').style.display="block";
      current=document.getElementById('MarksIdentity');
  }
  function getques(){
    action.style.display="none";
       p.style.display="none";
    document.getElementById("see").style.display="block";
    current=document.getElementById("see");
/* var it=document.getElementById("quesId").value;
  var tt=firebase.database().ref(it+1).child("a");
              tt.on('value',snap=>{
              var f=(JSON.parse(JSON.stringify(snap.val(),null,3)));
              var final=JSON.parse(f);
              totq=final.noQUESTION;
              console.log(totq);
});
*/

  }
  var dispQues;
  var todispit;

var noQues;
var hj=1;
var jqhcCopy;
function quesDisplaying(){


  jqhc++;
console.log("quesDisplaying");
  console.log(jqhc);
  quesDisplay(jqhc);
}
  function quesDisplay(jqhc){
    
        document.getElementById('dispForm').reset();
        jqhcCopy=jqhc;
        document.getElementById("see").style.display="none";
          todispit=document.getElementById("quesId").value;
 
      /*    dispQues=firebase.database().ref(todispit+count).child("totalQUESTION");
          dispQues.on('value',snap=>{
          var f=(JSON.parse(JSON.stringify(snap.val(),null,3)));
          //var final=JSON.parse(f);

noQues=f;
console.log(noQues);
console.log(typeof noQues);
*/



              dispQues=firebase.database().ref(todispit+jqhc).child("a");
              dispQues.on('value',snap=>{
              var f=(JSON.parse(JSON.stringify(snap.val(),null,3)));
              var final=JSON.parse(f);
              document.getElementById("QID").innerHTML=todispit+jqhc;
      
            document.getElementById("finalDisp").style.display="block";
            current=document.getElementById('finalDisp');

console.log(hj);
console.log(jqhc);
console.log(jqhc);
if(hj==1){

var jthc=final.time;
console.log(jthc);
console.log(typeof final.time);
    document.getElementById('timer').innerHTML =
  Number(jthc) + ":" + 01;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0)
  {
    m=10;
  clearTimeout(jjj);
  if(flag==1)
      finalSubmit();

  }
  document.getElementById('timer').innerHTML =
    m + ":" + s;
 var jjj= setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}











  document.getElementById('myDIV').style.display="block";
  current=document.getElementById('myDIV');
noQues=final.noQUESTION;
//var pd=document.getElementById('demo');
var divq=document.getElementById('myDIV');
for(var i=1;i<=noQues;i++)
{
  var newButton=document.createElement("button");
  newButton.innerHTML=i;
  divq.appendChild(newButton);
  newButton.onclick=function(e)
  {
    display(e.target.innerHTML);
  }
}
function display(todis){
  quesDisplay(todis);
}



/*var parabut=[];
for(var i=1;i<=noQues;i++){
  parabut.push(document.createElement("button"));
  parabut[i-1].innerHTML ="Q "+i;
  parabut[i-1].addEventListener("click",function(){
    quesDisplay(i-1);
  });
  }
  for(var i=0;i<noQues;i++){
  document.getElementById("myDIV").appendChild(parabut[i]);
  }*/
  hj++;
}
if(jqhc==noQues)
    {
      document.getElementById('nextq').style.display="none";
    }
    else
    {
      document.getElementById('nextq').style.display="block"; 
      current=document.getElementById('nextq');
    }



          document.getElementById('Question').innerHTML=final.question;
          document.getElementById('oo1').innerHTML=final.option1;
          document.getElementById('oo2').innerHTML=final.option2;
          document.getElementById('oo3').innerHTML=final.option3;
          document.getElementById('oo4').innerHTML=final.option4;
          corOP=final.optioncorrect;
          fireCorAns[jqhc-1]=corOP;
          console.log(fireCorAns[jqhc-1]);
          //console.log(fireQuesId[jqhc-1]);
  });
  }

 var choices=document.getElementsByName("choices");
 var nat=0;
  function save(){
    nat=0;
    for(var i=0;i<choices.length;i++)
      {
        if(choices[i].checked)
        {
          nat=1;
          choice=choices[i].value;
        }
      }
      for(var ii=0;ii<noQues;ii++)
      {
        if(candAns[ii]==undefined)
          candAns[ii]='0';
      }
      if(nat==0)
        candAns[jqhcCopy-1]='0';
      else
        candAns[jqhcCopy-1]=choice;
  //candAns.push(choice);//[document.getElementById("QID").innerHTML-1]=choice;
  console.log(candAns[jqhc-1]);
  console.log(choices.length);
  console.log(choices[0].checked);
  console.log(choices[1].checked);
  console.log(choices[2].checked);
  console.log(choices[3].checked);
}     
function getmarks(){
  document.getElementById('MarksIdentity').style.display="none";
  var disRes=firebase.database().ref(document.getElementById('marksId').value+'RESULT').child("RESULT");
  disRes.once('value',snap=>{
  var fr=(JSON.parse(JSON.stringify(snap.val(),null,3)));
  var finalr=JSON.parse(fr);
  console.log(finalr.array);
  console.log(finalr.arrayname);
  var aar=finalr.array;
  var aarname=finalr.arrayname;
  var arf=[];
  var arnamef=[];
  for(var i=aar.length-1;i>=1;i--)
  {
    for(var j=1;j<i;j++)
    {
      if(aar[j]<aar[j+1])
      {
        var temp=aar[j];
        var tempname=aarname[j];
        aar[j]=aar[j+1];
        aarname[j]=aarname[j+1];
        aar[j+1]=temp;
        aarname[j+1]=temp;
      }
    }
  }
      document.getElementById('tab').style.display="block";
  aar.shift();
  aarname.shift();
  //document.getElementById('ar').innerHTML=aar;
 // document.getElementById('arname').innerHTML=aarname;
  console.log(aar);
  console.log(aarname);
  var tabl=document.getElementById('tab');
  for(var i=1;i<=aar.length;i++)
  {
    var newrow=document.createElement('tr');
    var c1=document.createElement('td');
    c1.innerHTML=i;
    var c2=document.createElement('td');
    c2.innerHTML=aar[i-1];
    var c3=document.createElement('td');
    c3.innerHTML=aarname[i-1];
    newrow.appendChild(c1);
    newrow.appendChild(c2);
    newrow.appendChild(c3);
    tabl.appendChild(newrow);
  }
});
}
var sum=0;
function finalSubmit()
{
  document.getElementById('myDIV').style.display="none";
  var fdis=document.getElementById('finalDisp');
  fdis.style.display="none";
  console.log(candAns);
  var clen=candAns.length;
  console.log(clen);
  for(var g=0;g<clen;g++)
  {
      console.log("the world");
      if(candAns[g]=='0')
        ;
      else if(candAns[g]==fireCorAns[g])
        sum+=10;
      else
        sum-=5;
  }
  console.log(sum);
  document.getElementById('result').style.display="block";
  current=document.getElementById('result');
  var marks=document.getElementById('marks');
  var percentage=document.getElementById('percentage');
  var rank=document.getElementById('rank');
  var high=document.getElementById('high');
  var avg=document.getElementById('avg');
  marks.innerHTML=sum;
  percentage.innerHTML=((sum/(10*clen))*100);
      var key= firebase.database().ref(todispit+'RANK').push().key;
      console.log(key);
      var newData={
        marks :sum
      }

var qqq;
console.log(document.getElementById("quesId").value);
var newQ=[];
var cA=[];
          for(var ia=0;ia<candAns.length;ia++)
          {
            var oooo=ia+1;
            var dispQues=firebase.database().ref(document.getElementById("quesId").value+oooo).child("a");
                          dispQues.on('value',snap=>{
                          var f=(JSON.parse(JSON.stringify(snap.val(),null,3)));
                          var final=JSON.parse(f);
                          qqq=final.question;
                          console.log(qqq);
                          console.log(final.optioncorrect);  
                          newQ.push(qqq);
                          cA.push(final.optioncorrect);
            });
          }

console.log(candAns);
console.log(newQ, newQ[2]);
console.log(cA, cA[2]);
console.log(typeof cA[0]);
console.log(cA[2]);
console.log(newQ[2]);
flag=0;
displaytable(candAns,cA,newQ);
/*document.getElementById('g1').innerHTML=candAns[0];
document.getElementById('g2').innerHTML=candAns[1];
document.getElementById('g3').innerHTML=candAns[2];
document.getElementById('g4').innerHTML=newQ[0];
document.getElementById('g5').innerHTML=newQ[1];
document.getElementById('g6').innerHTML=newQ[2];
document.getElementById('g7').innerHTML=cA[0];
document.getElementById('g8').innerHTML=cA[1];
document.getElementById('g9').innerHTML=cA[2];*/
/*
for(var i=0;i<candAns.length;i++)
{

var oooo=i+1;
var dispQues=firebase.database().ref(todispit+oooo).child("a");
              dispQues.on('value',snap=>{
              var f=(JSON.parse(JSON.stringify(snap.val(),null,3)));
              var final=JSON.parse(f);
              qqq=final.question;
});





  if(candAns[i]=='0')
  {
      var tabl=document.getElementById('leftAns');
          var newrow=document.createElement('tr');
          var c1=document.createElement('td');
          c1.innerHTML=i+1;
          var c2=document.createElement('td');
          c2.innerHTML=qqq;
          var c3=document.createElement('td');
          c3.innerHTML=fireCorAns[i];
          newrow.appendChild(c1);
          newrow.appendChild(c2);
          newrow.appendChild(c3);
          tabl.appendChild(newrow);
      
  }
  else if(candAns[i]!=fireCorAns[i])
  {
        var tabl=document.getElementById('incorAns');
          var newrow=document.createElement('tr');
          var c1=document.createElement('td');
          c1.innerHTML=i+1;
          var c2=document.createElement('td');
          c2.innerHTML=qqq;
          var c3=document.createElement('td');
          c3.innerHTML=fireCorAns[i];
          newrow.appendChild(c1);
          newrow.appendChild(c2);
          newrow.appendChild(c3);
          tabl.appendChild(newrow);
  }
}
*/






      var s;
      var r=sum;
      var h=sum;
      var no;
          var disRes=firebase.database().ref(todispit+'RESULT').child("RESULT");
          disRes.once('value',snap=>{
          var fr=(JSON.parse(JSON.stringify(snap.val(),null,3)));
          var finalr=JSON.parse(fr);
          //document.getElementById('rews').innerHTML=Number(finalr.sum)/Number(finalr.number);
          console.log(r);
          r=Number(r)+Number(finalr.sum);
          no=Number(finalr.number)+1;
          console.log(typeof  r);
          console.log(typeof  finalr.sum);
          console.log(finalr.sum);
          console.log(r);
          if(Number(h)>Number(finalr.highest))
            h=Number(h);
          else
            h=Number(finalr.highest);

          document.getElementById('avg').innerHTML=r/no;
          document.getElementById('high').innerHTML=h;
          var ar1=finalr.array;
          var arname1=finalr.arrayname;
          var nabove=0;
          console.log(typeof ar1);
          console.log(finalr.array); 
          for(var i1=0;i1<ar1.length;i1++)
          {
            if(ar1[i1]>sum)
              nabove++;
          }
          document.getElementById('rank').innerHTML=(nabove+1);
          console.log(nabove);
          console.log(finalr.array); 
          console.log(finalr.arrayname);
            ar1.push(sum);
            arname1.push(unique);
            mod(r,ar1,arname1);
            
        });
console.log(r);
function mod(rs,arr1,arrname1){
console.log(rs);
            var resJ={
              "sum":''+rs,
              "number":''+no,
              "highest":''+h,
              "array":arr1,
              "arrayname":arrname1
            }
            var Jres=JSON.stringify(resJ);
            firebase.database().ref(todispit+'RESULT').update({
              RESULT:Jres
            });
          }
          /*var rx=document.getElementById('rews').innerHTML;
          var resJSON={
          "sum":'200',
          "number":0,
          "highest":0
          }
          JSONres=JSON.stringify(resJSON);
          firebase.database().ref(todispit+'RESULT').set({
          RESULT:JSONres
        });



          /*var rx=document.getElementById('rews').innerHTML;
          var dispRes=firebase().ref(todispit+'RESULT').child("RESULT");
          dispRes.on('value',snap=>{

          });
          /*
          document.getElementById("QID").innerHTML=todispit+count;
          document.getElementById("finalDisp").style.display="block";
          document.getElementById('Question').innerHTML=final.question;
          document.getElementById('oo1').innerHTML=final.option1;
          document.getElementById('oo2').innerHTML=final.option2;
          document.getElementById('oo3').innerHTML=final.option3;
          document.getElementById('oo4').innerHTML=final.option4;
        /*firebase.database().ref(todispit+'RANK').push(newData);
        dispRes=firebase.database().ref(todispit+'RESULT').child("RESULT");
        dispRes.on('value',snap=>{
        var re=(JSON.parse(JSON.stringify(snap.val(),null,3)));
        var rf=JSON.parse(re);
        console.log(rf.sum);
        document.getElementById('demo').innerHTML=rf.sum;
        /*r+=sum;
        var resJSON={
          "sum":r,
          "number":0,
          "highest":0
        }
        console.log(r);
        JSONres=JSON.stringify(resJSON);
        firebase.database().ref(todispit+'RESULT').set({
          RESULT:JSONres
        });*/
   //   });
        /*r=document.getElementById('demo').innerHTML;
        var resJSON={
          "sum":r,
          "number":0,
          "highest":0
        }
        console.log(r);
        JSONres=JSON.stringify(resJSON);
        firebase.database().ref(todispit+'RESULT').set({
          RESULT:JSONres
        });

       /* r+=sum;
        var resJSON={
          "sum":r,
          "number":0,
          "highest":0
        }
        console.log(r);
        /*JSONres=JSON.stringify(resJSON);
        firebase.database().ref(todispit+'RESULT').set({
          RESULT:JSONres
        });

      //dispRes.on('value',snap=>{
        //r=JSON.parse((JSON.stringify(snap.val(),null,3)));
        //console.log(typeof r.sum);
        //console.log(r.sum);
      //}); 

      //console.log(r.sum);
      //console.log(r.sum);
      //r+=sum;
      //console.log(r.sum);
      //firebase.database().ref(todispit+'RESULT').set({
       //   sum:r
      //});
       /*websiteName: this.webname.value,
        username: this.username.value,
        password : this.password.value,
        websiteLink : this.weblink.value
    }
    rerank=firebase.database().ref(todispit+count).
    firebase.database().ref('PHY1').push(newData);
  /*function submitClick(x,n){
        firebase.database().ref(todispit+'rank').set({
          mark:sum
        });
    }*/
}

   /*
  function save(){
      for(var i=0;i<choices.length;i++)
      {
        if(choices[i].checked)
        {
          choice=choices[i].value;
        }
      }  
      inputID.push(todispit+count-1);
      inputID.push(choice);
  }*/
































/*
var pos = 0,test,test_status,question,choices,chA,chB,chC,correct=0;
    var questions = [
    ["What is 10 +4?","12","14","16","B"],
    ["What is 10 +2?","12","14","16","A"],
    ["What is 10 +6?","12","14","16","C"],
    ["What is 10 +0?","10","14","16","A"]
  ];
  function _(x){
    return document.getElementById(x);
  }
  function renderQuestion(){
    test=_('test');
    if(pos>=questions.length){
        test.innerHTML="Test Completed";
        return false;
    }

    _('test_status').innerHTML="Question"+(pos+1)+" of "+questions.length;
    question=questions[pos][0];
    chA=questions[pos][1];
    chB=questions[pos][2];
    chC=questions[pos][3];
    test.innerHTML="<h3>"+question+"</h3>";
    test.innerHTML+="<input type='radio' name='choices' value='A'>"+chA+"<br>";
    test.innerHTML+="<input type='radio' name='choices' value='B'>"+chB+"<br>";
    test.innerHTML+="<input type='radio' name='choices' value='C'>"+chC+"<br><br>";
    test.innerHTML+="<button onclick='checkAnswer()'>Submit Answer</button>";
    
  }
  function checkAnswer()
  {
    choices=document.getElementsByName("choices");
    for(var i=0;i<choices.length;i++)
    {
      if(choices[i].checked)
      {
        choice=choices[i].value;
      }
    }
    function submitClick(){
        firebase.database().ref('quetion'+pos).set({
        answer: choice
      });
    }
    submitClick();
    pos++;
    renderQuestion();
  }*/
  function displaytable(studentAns,correctAns,questn)
  {
    var tableft=document.getElementById('leftAns');
    var tabwrong=document.getElementById('incorAns');
    for(var i=0;i<studentAns.length;i++)
    {
                    if(studentAns[i]=='0')
                    {
                            var newrow=document.createElement('tr');
                            var c1=document.createElement('td');
                            c1.innerHTML=i+1;
                            var c2=document.createElement('td');
                            c2.innerHTML=questn[i];
                            var c3=document.createElement('td');
                            c3.innerHTML=correctAns[i];
                            newrow.appendChild(c1);
                            newrow.appendChild(c2);
                            newrow.appendChild(c3);
                            tableft.appendChild(newrow);
                        
                    }
                    else if(studentAns[i]!=correctAns[i])
                    {
                            var newrow=document.createElement('tr');
                            var c1=document.createElement('td');
                            c1.innerHTML=i+1;
                            var c2=document.createElement('td');
                            c2.innerHTML=questn[i];
                            var c3=document.createElement('td');
                            c3.innerHTML=correctAns[i];
                            newrow.appendChild(c1);
                            newrow.appendChild(c2);
                            newrow.appendChild(c3);
                            tabwrong.appendChild(newrow);
                   }
    }
  }