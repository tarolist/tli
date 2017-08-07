var data = ['계량', '반죽', '뭉치기', '','가스빼기', '형태만들기','','굽기'];

for(var i = 0, len = data.length; i < len; i++){
  if(data[i] === ''){break;}
  console.log(data[i]);
}