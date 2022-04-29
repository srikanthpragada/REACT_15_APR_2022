
class Student
{
   constructor(name, course) {
       this.name = name;
       this.course = course;
       this.feepaid = 0;
   }

   payment(amount) {
       this.feepaid  += amount;
   }
   getTotalFee() {
       return  this.course === 'java' ? 10000 : 5000;
   }

   getDue() {
       return  this.getTotalFee() - this.feepaid; 
   }
}

// Inheritance 
class DiscountStudent extends Student {
       constructor(name, course, disrate) {
          super(name,course)
          this.disrate = disrate 
      }
      getTotalFee() {
         let fee = super.getTotalFee() 
         let discount = fee * this.disrate / 100
         return fee - discount
      }
}

s1 = new Student("Abc", "java");
s1.payment(5000);
console.log(s1.getDue() )

s2 = new DiscountStudent("Xyz", "java", 20)
console.log(s2.getTotalFee())

