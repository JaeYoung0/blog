---
title: typescript Challenge 2
description: "Readonly"
date: "2021-01-06"
---

# 2. Readonly

- readonly Properties
  1. Property앞에 readonly를 붙이면 그 Property는 쓰기 불가상태가 됨.
     - code
       ```tsx
       interface SomeType {
         readonly prop: string;
       }

       function doSomething(obj: SomeType) {
         // 1. We can read from 'obj.prop'.
         console.log(`prop has the value '${obj.prop}'.`);

         // 2. But we can't re-assign it.
         obj.prop = "hello"; // error: Cannot assign to 'prop' because it is a read-only property.
       }
       ```
  - readonly를 사용한다고해서 그 값이 완전히 불변이라는 의미는 아님. internal contents가 바뀔 수 없다는걸 의미하지도 않음. it just means the property itself can’t be re-written to
    - code
      ```jsx
      interface Home {
        readonly resident: { name: string; age: number };
      }

      function visitForBirthday(home: Home) {
        console.log(`Happy birthday ${home.resident.name}!`);
        home.resident.age++;                    // We can read and update properties from 'home.resident'.
      }

      function evict(home: Home) {
        // But we can't write to the 'resident' property itself on a 'Home'.
        home.resident = {                       // error: Cannot assign to 'resident' because it is a read-only property.
          name: "Victor the Evictor",
          age: 42,
        };
      }
      ```
  - `readonly` properties can also change via aliasing
    - [code](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgArQM4HsTIN4BQyyIcAthAFzIZhSgDmA3EcnA1SQK5kBG0LAL4ECoSLEQoAShDgATHABsAnuijZchYlFkKQKkuU616IZqx3ylyth2oge-KEJGKIYZAHd6YOLzdqGtSBOMgAvPispBTUAEQhuACyCAnwSLEANKzsnAAsAExZgiwEAPSlXlhQANYYBG4elnoqCdQyVvqqmKER3sC+-hAJJQQIONhuAHSKWAwAFE3WCZM5AJRMyOXIAA6mYBjIAOQFhwR9AwHdICscANS3LGMgExDTswu6S1c3EOubFbsxAdjgBmQ5AA)
      ```tsx
      interface Person {
        name: string;
        age: number;
      }

      interface ReadonlyPerson {
        readonly name: string;
        readonly age: number;
      }

      let writablePerson: Person = {
        name: "Person McPersonface",
        age: 42,
      };

      // works
      let readonlyPerson: ReadonlyPerson = writablePerson;

      console.log(readonlyPerson.age); // prints '42'
      writablePerson.age++;
      console.log(readonlyPerson.age); // prints '43'
      ```
