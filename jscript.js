let count=0;
        let passengerCount=document.getElementById("showCount")
        function increment(){
            count+=1
            passengerCount.textContent="Passenger Entered: "+count
        }
        let savedPassengerCount=document.getElementById("savedPCount")
        function saveCount(){
            if(count>0){
                let savedData=count + "- ";
                savedPassengerCount.textContent+= savedData;
                passengerCount.textContent="Passenger Entered: 0";
                count=0;
            }
            else{
                alert("No passenger to save")
            }
        }