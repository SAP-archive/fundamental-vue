# Contributing to Fundamental Vue

We're excited that you're interested in contributing to Fundamental-vue! Your contribution can make this library even better. Please read the guidelines regarding contributions:

-   [Issues and Bugs](#issues-and-bugs)
-   [Feature Requests](#feature-requests)
-   [Contribute Code](#contribute-code)

## Implementing a new Component

If you want to contribute a new component read the [Implementing a new Component Guide](./NEW_COMPONENT/NEW_COMPONENT.md).

## Issues and Bugs

If you find a bug or some other issue with any part of the library, please [submit an issue](https://github.wdf.sap.corp/hybris-pd/fundamental-vue/issues). Before doing so, please make sure that:

-   The issue is not a duplicate issue.
-   The issue has not been fixed in a newer release of the library.
-   The issue is reproducible.
-   Your explanation is clear and complete.
-   You provide example code and/or screenshots (recommended).

If you meet the above criteria, you can submit issues with our [GitHub issue tracker](https://github.wdf.sap.corp/hybris-pd/fundamental-vue/issues/new). Please use [labels](#usage-of-labels) to categorize your issue.

## Feature Requests

You can also use the issue tracket to request a new feature or enhancement. Even if you want to implement the feature yourself, please first submit an issue detailing your proposal so that we may discuss it with you and the community before moving forward. Please use [labels](#usage-of-labels) when creating feature requests.

### Usage of Labels

GitHub offers labels to categorize issues. You can use the following labels:

Labels for issue categories:

-   bug: Something isn't working / Issues in the code.
-   documentation: Issues with the documentation (repo and website documentation).
-   enhancement: New feature or enhancement requests.

Status of open issues:

-   (no label): The default status.
-   unconfirmed: The issue needs to be confirmed as being a bug or future enhancement.
-   approved: The issue is confirmed as being a bug to be fixed or enhancement to be developed.
-   author action: The issue's creator needs to provide additional information.
-   contribution welcome: The fix or enhancement is approved and you are invited to contribute to it.

Status of closed issues:

-   fixed: A fix for the issue was provided.
-   duplicate: The issue is also reported in a different ticket and is being managed there.
-   invalid: The reported issue will not be addressed.
-   works: The issue cannot be reproduced, or the feature is working as expected.
-   wontfix: The issue will not be fixed.

## Contribute Code

You are welcome to contribute code to Fundamental Vue in order to fix issues or to add new features.

There are three important things to consider:

1.  You must be aware of the Apache License (which describes contributions) and **accept the Developer Certificate of Origin**. This is common practice in major Open Source projects. To make this process as simple as possible, we are using *[CLA assistant](https://cla-assistant.io/)* for individual contributions. CLA assistant is an open source tool that integrates with GitHub very well and enables a one-click experience for accepting the CLA. For company contributors, special rules apply. See the respective section below for details.
2.  You must follow **code style, quality, and product standards requirements**. You can find more information on the coding guidelines below.

## Developer Certificate of Origin (DCO)

Due to legal reasons, contributors will be asked to accept a DCO before they submit the first pull request to this projects, this happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

### Contribution Content Guidelines

You must follow the coding style as best you can when submitting code. Take note of naming conventions, separation of concerns, and formatting rules. You can use the code formatter [Prettier](https://prettier.io/) to handle some of this for you automatically.

### How to contribute - the Process

1.  Make sure the issue you've filed in the [issue tracker] has the label "contribution welcome" - otherwise, it is not ready to be worked on.
2.  Fork the Fundamental Vue repository to your GitHub account.
3.  Create a branch for your issue or feature, and commit or push your changes on that branch.
4.  Create a Pull Request from your forked repository to github.com/SAP/fundamental-vue. In the subject of the pull request, use "fix:" to denote a bug fix, "feat:" to denote an enhancement or "chore:" for small configuration updates and briefly describe the bug fix or enhancement you're contributing. In the pull request description, please provide a link to the issue in the issue tracker. **Do not include "BREAKING CHANGE" in the subject or description.**
5.  Follow the link posted by the CLA assistant to your pull request and accept it, as described above.
6.  Wait for our code review and approval. We may ask you for additional commits, or make changes to your pull request ourselves.
    -   Note that the Fundamental Vue developers also have their regular duties so, depending on the required effort for reviewing, testing, and clarification, this may take a while.
7.  Once the change has been approved, we inform you in a comment.
8.  Your pull request cannot be merged directly into the branch (internal SAP processes), but is merged internally and immediately appears in the public repository as well.
9.  We close the pull request. You can then delete the now obsolete branch.
