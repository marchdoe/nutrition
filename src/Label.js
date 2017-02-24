import React from 'react';
import NutritionFacts from 'nutrition-facts';
import './App.css';

// USDA_NDB_API_KEY = 'aGHdsb4vd1kqR4GRiq9aYSWzQCgr3qCxK73IXqdR';
const NF = new NutritionFacts(process.env.USDA_NDB_API_KEY);

var Label = React.createClass({
  componentDidMount() {
    NF.searchFoods({
        q: 'salted butter',
        ds: 'Standard Reference'
    }).then(results => {
        // Returns search results
        let mySelectedItem = results.list.item[0]

        // Items are returned as a FoodItem instance
        // allowing you to call 'getNutrition' directly on the instance.
        mySelectedItem.getNutrition()
          .then(nutritionReport => {
          this.setState({ FoodItem: nutritionReport })
          console.log(nutritionReport)
          })

    })
  },

  getInitialState: function() {
    if (!this.state.FoodItem) return null
    const {FoodItem} = this.state
  },

  render: function() {
    return (
      <div>
        <div className="flex flex-wrap content-start border border-light p2">
          <div className="col-12 pt1">
            <h2 className="m0 p0">
              Nutrition Facts
            </h2>
            <h3>{FoodItem.name}</h3>
          </div>

          <div className="col-12 pb1 border-bottom border-triple">
            Serving Size: One Container (9.7oz)
          </div>

          <div className="col-12 py1 border-bottom border-light">
            Amount per serving
          </div>

          <div className="flex col-12 py1 pr1 box-sizing border-bottom border-light">
            <div className="flex-auto">
              <strong>Calories</strong> 330
            </div>
            <div>
              <strong>Calories from fat</strong> 190
            </div>
          </div>

          <div className="col-12 py1 border-bottom border-light align-right">
            % Daily Value *
          </div>

          <div className="col-12">
            <div className="flex py1 border-bottom border-light">
              <div className="flex-auto">
                <strong>Total Fat</strong> 21g
              </div>
              <div>
                27%
              </div>
            </div>
            <div className="flex ml1 py1 border-bottom border-light">
              <div className="flex-auto">
                Saturated Fat 3.5g
              </div>
              <div>
                18%
              </div>
            </div>
          </div>

          <div className="col-12 py1 border-bottom border-light">
            <div className="flex">
              <div className="flex-auto">
                <strong>Cholesterol</strong> 0mg
              </div>
              <div>
                0%
              </div>
           </div>
          </div>

          <div className="col-12 py1 border-bottom border-light">
            <div className="flex">
              <div className="flex-auto">
                <strong>Sodium</strong> 630mg
              </div>
              <div>
                27%
              </div>
           </div>
          </div>

          <div className="col-12">
            <div className="flex py1 border-bottom border-light">
              <div className="flex-auto">
                <strong>Total Carbohydrate</strong> 34g
              </div>
              <div>
                12%
              </div>
            </div>
            <div className="flex ml1 py1 border-bottom border-light">
              <div className="flex-auto">
                Dietary Fiber 8g
              </div>
              <div>
                29%
              </div>
            </div>
            <div className="flex ml1 py1 border-bottom border-light">
              <div className="flex-auto">
                Sugars 15g
              </div>
              <div />
            </div>

          </div>

          <div className="col-12 py1 border-bottom border-triple">
            <strong>Protein</strong> 7g
          </div>

          <div className="flex col-6 py1 border-bottom border-light">
            <div className="flex-auto">
              Vitamin A
            </div>
            <div>
              200%
            </div>
          </div>
          <div className="flex col-6 py1 border-bottom border-light">
            <div className="flex-auto">
              Vitamin C
            </div>
            <div>
              3%
            </div>
          </div>

          <div className="flex col-6 py1 border-bottom border-light">
            <div className="flex-auto">
              Calcium
            </div>
            <div>
              8%
            </div>
          </div>
          <div className="flex col-6 py1 border-bottom border-light">
            <div className="flex-auto">
              Iron
            </div>
            <div>
              15%
            </div>
          </div>

          <div className="flex col-6 py1 border-bottom border-light">
            <div className="flex-auto">
              Vitamin D
            </div>
            <div>
              0%
            </div>
          </div>
          <div className="flex col-6 py1 border-bottom border-light">
            <div className="flex-auto">
              Vitamin B6
            </div>
            <div>
              25%
            </div>
          </div>

          <div className="flex col-6 py1 border-bottom border-light">
            <div className="flex-auto">
              Vitamin B12
            </div>
            <div>
              0%
            </div>
          </div>
          <div className="flex col-6 py1 border-bottom border-light">
            <div className="flex-auto">
              Magnesium
            </div>
            <div>
              25%
            </div>
          </div>

          <p className="pt1 m0">
            <small>* Percent daily values based on a 2,000 calorie diet</small>
          </p>
        </div>
      </div>
    );
  }
});
