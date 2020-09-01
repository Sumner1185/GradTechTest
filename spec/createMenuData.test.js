createMenuData = require('../src/createMenuData')

  describe("menu Data Generator", () => {

      it('Takes an array as a parameter', () => {
        let data = []
        expect(createMenuData(data)).toEqual(data)
      })

      it('Takes an array with one string splits at / and returns title as string and data as array of strings', () => {
        let data = ['parent1/parent1child']
        let expectedResult = [{title: 'parent1', data: ['parent1child']}]
        expect(createMenuData(data)).toEqual(expectedResult)
      })

      it('Takes array with two strings and returns object with title: and data:', () => {
        let data = ["parent1/parent1child", "parent2/parent2child"]
        let expectedResult = [
          { title: 'parent1', data: ['parent1child'] },
          { title: 'parent2', data: ['parent2child'] }
        ]
        expect(createMenuData(data)).toEqual(expectedResult)
      })

      it('Takes array with two strings and returns object with title: and data:', () => {
        let data = ["parent1/parent1child", "parent2/parent2child", "parent3/parent3child"]
        let expectedResult = [
          { title: 'parent1', data: ['parent1child'] },
          { title: 'parent2', data: ['parent2child'] },
          { title: 'parent3', data: ['parent3child'] }
        ]
        expect(createMenuData(data)).toEqual(expectedResult)
      })

      it('Takes array with three strings and returns object with title: and grouped data:', () => {
        let data = ["parent1/parent1child", "parent1/parent1child2", "parent2/parent2child"]
        let expectedResult = [
          { title: 'parent1', data: ['parent1child', 'parent1child2'] },
          { title: 'parent2', data: ['parent2child'] }
        ]
        expect(createMenuData(data)).toEqual(expectedResult)
      })

      it('Can group data when parent details are not in order', () => {
        let data = ["parent1/parent1child", "parent2/parent2child", "parent3/parent3child", "parent1/parent1child2"]
        let expectedResult = [
          { title: 'parent1', data: ['parent1child', 'parent1child2'] },
          { title: 'parent2', data: ['parent2child'] },
          { title: 'parent3', data: ['parent3child'] }
        ]
        expect(createMenuData(data)).toEqual(expectedResult)
      })

      it('Adds nothing to the array in no child information', () => {
        let data = ["parent1/parent1child", "parent2/parent2child", "parent3"]
        let expectedResult = [
          { title: 'parent1', data: ['parent1child'] },
          { title: 'parent2', data: ['parent2child'] }
        ]
        expect(createMenuData(data)).toEqual(expectedResult)
      })

      it("creates correct data structure ", () => {
        const data = [
          "parent1/parent1child",
          "parent1/parent1child2",
          "parent2/parent2child",
          "parent2/parent2child2",
          "parent1/parent1child3",
          "parent3",
          "parent3/parent3child1",
          "parent4"
        ];
    
        const expectedResult = [
          {
            title: "parent1",
            data: ["parent1child", "parent1child2", "parent1child3"]
          },
          { title: "parent2", data: ["parent2child", "parent2child2"] },
          { title: "parent3", data: ["parent3child1"] }
        ];
    
        const actualResult = createMenuData(data);
        expect(actualResult).toMatchObject(expectedResult);
      });

      it('Raises error if anything other than an array is passed', () => {
        let data = 123

        expect(() => {
          createMenuData(data)
        }).toThrow('Input data must be an array')
      })

      it('Raises error if anything other than an array is passed', () => {
        let data = 'Test'

        expect(() => {
          createMenuData(data)
        }).toThrow('Input data must be an array')
      })

      it('Raises error if anything other than an array is passed', () => {
        let data = true

        expect(() => {
          createMenuData(data)
        }).toThrow('Input data must be an array')
      })
    
  });