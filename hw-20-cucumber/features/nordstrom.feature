Feature: Nordstrom Cucumber.js Autotests

    Background:
        Given the user is on the Nordstrom homepage

    Scenario: User is able to open Nordstrom web-site
        When the user navigates to the Nordstrom homepage
        Then the user is able to see its top pick content

    Scenario: Clicking on a random Top Pick Guide
        When the user selects a random guide from Top Picks
        Then the guide should open without an error       

    Scenario: Randomly switching between Top Picks Guides
        Given the user sees a currently active guide
        When the user clicks on a different random guide
        Then the new guide should become active
        Then it should not be the same as the previous open

    Scenario: "Women's New Arrivals Under $100" guide displays products
        When the user activates the guide
        Then the products should be displayed with prices    
