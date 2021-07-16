# Changelog

All notable changes to this project will be documented in this file.

## [3.0.0](https://www.github.com/Fdawgs/node-unrtf/compare/v2.0.1...v3.0.0) (2021-07-16)


### ⚠ BREAKING CHANGES

* remove support for nodejs v10, as it is EOL as of 2021-04-30
* **index:** `usage of convert(option, file) should be replaced with convert(file, option)`

### Features

* **index:** add binary version checking for options ([127a373](https://www.github.com/Fdawgs/node-unrtf/commit/127a3737fdde1e2c4aebc983c23614aec9b92530))
* **index:** add support for output for ps and wpml formats ([43a6b17](https://www.github.com/Fdawgs/node-unrtf/commit/43a6b172d2ed457bf2bf71327c2f1304dfdee644))
* **index:** add typescript definitions ([bcee2d0](https://www.github.com/Fdawgs/node-unrtf/commit/bcee2d09a2b64139751093367bac4203de000e35))


### Bug Fixes

* **index:** catch empty file vars before unrtf parses them ([8bce040](https://www.github.com/Fdawgs/node-unrtf/commit/8bce0405a14fc2448dcb9c7170892ea952a24262))
* **index:** check file exists before attempting to parse ([de0b2e9](https://www.github.com/Fdawgs/node-unrtf/commit/de0b2e9570fbd0fb1faaa58ea2f9530f483ec386))
* **index:** correct misspelling of `received` in error string ([cf3ca4c](https://www.github.com/Fdawgs/node-unrtf/commit/cf3ca4c1e7e09c2402b95b9332ea070bec072108))
* **index:** normalize file paths ([#89](https://www.github.com/Fdawgs/node-unrtf/issues/89)) ([0a86b1c](https://www.github.com/Fdawgs/node-unrtf/commit/0a86b1ca0006a74c9937a5640092e1caee6aa442))
* **index:** return promise objects ([6481163](https://www.github.com/Fdawgs/node-unrtf/commit/6481163ce3541e5426139cf16a1903d98b5342bd))
* **index:** throw error if file param is not rtf ([e751c29](https://www.github.com/Fdawgs/node-unrtf/commit/e751c29be04c8ee77b43c34279b906b0c8455158))
* remove lockfile ([392dcc7](https://www.github.com/Fdawgs/node-unrtf/commit/392dcc7056da465d65b27ee06ba87111af8a340f))
* script calls ([e9423b9](https://www.github.com/Fdawgs/node-unrtf/commit/e9423b981137ce2d357f9e55552faef936cfd159))
* **scripts:** test script ([e7c81d4](https://www.github.com/Fdawgs/node-unrtf/commit/e7c81d407926b2c12439423b3185f4fdfe2a3c0b))


### Improvements

* **index:** concat invalid args provided into error object ([23b72a6](https://www.github.com/Fdawgs/node-unrtf/commit/23b72a666eab9d882ece44e988bd7d0a9444974e))
* **index:** make version param optional ([4b138c0](https://www.github.com/Fdawgs/node-unrtf/commit/4b138c0c518e15e5d9597f2cf37b557d4bc89576))
* **index:** move optional option param for convert function to end ([11a469a](https://www.github.com/Fdawgs/node-unrtf/commit/11a469ad9e56886c7b8c370cf8178e3fa54619c9))
* **index:** remove unused default branch ([458af22](https://www.github.com/Fdawgs/node-unrtf/commit/458af2218b5e8142fc56dedd0dcf43c11163464b))


### Documentation

* add api docs and examples ([23be7d0](https://www.github.com/Fdawgs/node-unrtf/commit/23be7d0d299bc9b57a988c990308e550150a9945))
* bump coc from v1.4.0 to v2.0.0 ([c88472f](https://www.github.com/Fdawgs/node-unrtf/commit/c88472fd632df2fb8d6391e8b7b9563a349b14b3))
* **changelog:** add compare links ([dbfc17b](https://www.github.com/Fdawgs/node-unrtf/commit/dbfc17b5367c12f8f5947ed9f9a296cd0b98d956))
* **changelog:** add h1 header ([ad97471](https://www.github.com/Fdawgs/node-unrtf/commit/ad97471d2142a7964495d44ecb869c84cd06df72))
* **contributing:** add documentation style ([8b7752a](https://www.github.com/Fdawgs/node-unrtf/commit/8b7752a96b85b1456ec49b40f49fc3630de03152))
* **contributing:** update prettier script ([e82457c](https://www.github.com/Fdawgs/node-unrtf/commit/e82457ccecb976b58478adfd781e7d92a80bcc88))
* **contributing:** update yarn link ([c332ad1](https://www.github.com/Fdawgs/node-unrtf/commit/c332ad10a182247b51411a4e54824a19f59885fb))
* grammar and readability fixes ([53c67dd](https://www.github.com/Fdawgs/node-unrtf/commit/53c67dd9657301df85a0d8c5aef68167376c7118))
* grammar and spelling fixes ([b69eca2](https://www.github.com/Fdawgs/node-unrtf/commit/b69eca2e0826918ddd24a64c8806e023a7d838e3))
* **index:** add note to jsdoc tags about select options errors ([cf5ce65](https://www.github.com/Fdawgs/node-unrtf/commit/cf5ce65bb04ac7935f169c7729b253d6648d1f19))
* **index:** clarify on required unrtf binary version ([8bc8c28](https://www.github.com/Fdawgs/node-unrtf/commit/8bc8c289bf8f2b3435e1867a6ba9a2f0046c94a2))
* **index:** correct return jsdoc tag for parseoptions function ([fc2b8d5](https://www.github.com/Fdawgs/node-unrtf/commit/fc2b8d52914030b806fef5a7a58c11ffb2ca10b2))
* **readme:** add osx usage instructions ([cc27882](https://www.github.com/Fdawgs/node-unrtf/commit/cc2788254416bc6944f97cb195c6d91baacf4c66))
* **readme:** fix broken link ([fe8feee](https://www.github.com/Fdawgs/node-unrtf/commit/fe8feee4c1ca05039aa13d15e1657280df334946))
* **readme:** grammar ([5bea49f](https://www.github.com/Fdawgs/node-unrtf/commit/5bea49fc181e1184334b50df23ff58a53b0a22f8))
* **readme:** remove abbreviation ([d057613](https://www.github.com/Fdawgs/node-unrtf/commit/d057613fc932413260a5740b48a78f04a0467775))
* **readme:** remove repetition ([250e4ae](https://www.github.com/Fdawgs/node-unrtf/commit/250e4aea3b856f90be112e93ba22fe31221f7a02))
* **readme:** revamp intro section ([574e7e4](https://www.github.com/Fdawgs/node-unrtf/commit/574e7e40e01da0dd762c4703fa6acbb278726989))
* **readme:** shorten links ([8523931](https://www.github.com/Fdawgs/node-unrtf/commit/8523931900f6fe9a67eca3c947b839284942261c))
* **readme:** update examples ([f30f50e](https://www.github.com/Fdawgs/node-unrtf/commit/f30f50e4a5ee4a3ef32f1ba31c3ad7281e80ab38))
* update contact email ([244d87b](https://www.github.com/Fdawgs/node-unrtf/commit/244d87b1dea5a281b8f60265f240dde79c60376e))


### Dependencies

* add typoci config file ([c035f8e](https://www.github.com/Fdawgs/node-unrtf/commit/c035f8eda597daf31793a780e6758b673d56d4c6))
* **dependabot:** set commit message prefix; lower pull limit ([029783c](https://www.github.com/Fdawgs/node-unrtf/commit/029783cba8103798c302e7981e53d743de528c87))
* **deps-dev:** add husky for git hook handling ([9913fd7](https://www.github.com/Fdawgs/node-unrtf/commit/9913fd75d70472c1cb4124b37a7c076a60befbaa))
* **deps-dev:** add is-html to test html responses ([d1c134d](https://www.github.com/Fdawgs/node-unrtf/commit/d1c134db2d38d103b1a3e00900895649613411d7))
* **deps-dev:** bump @commitlint/cli from 11.0.0 to 12.0.1 ([#41](https://www.github.com/Fdawgs/node-unrtf/issues/41)) ([56d0ed0](https://www.github.com/Fdawgs/node-unrtf/commit/56d0ed0a3ca12152244a4222c4851292b0b70dc9))
* **deps-dev:** bump @commitlint/config-conventional ([ffe38b1](https://www.github.com/Fdawgs/node-unrtf/commit/ffe38b15b2874c434fb48656f803ede780303d96))
* **deps-dev:** bump cross-env from 7.0.2 to 7.0.3 ([80816d2](https://www.github.com/Fdawgs/node-unrtf/commit/80816d221fa544f1433f1b1933a312f15c7dd6d5))
* **deps-dev:** bump dev dependencies ([e3f49b0](https://www.github.com/Fdawgs/node-unrtf/commit/e3f49b07071cb4e113fd20c44b57b5e7e1cc0d6b))
* **deps-dev:** bump dev dependencies ([6b70d86](https://www.github.com/Fdawgs/node-unrtf/commit/6b70d86a61dfd5b4cf8b6fb0ddb3b1bd32036edd))
* **deps-dev:** bump dev dependencies ([a5d3e16](https://www.github.com/Fdawgs/node-unrtf/commit/a5d3e16b52d639e4b5b76ea96370f63e6f28152b))
* **deps-dev:** bump dev dependencies ([7f70250](https://www.github.com/Fdawgs/node-unrtf/commit/7f7025065ba83f63a7f27b1bf00e65c72e03a471))
* **deps-dev:** bump dev dependencies ([38ac8fa](https://www.github.com/Fdawgs/node-unrtf/commit/38ac8fa10835a7c933e1048b9627018fe703ff7e))
* **deps-dev:** bump eslint from 7.14.0 to 7.16.0 ([2566935](https://www.github.com/Fdawgs/node-unrtf/commit/2566935f4406178c0c4d449028c06f1b52e50164))
* **deps-dev:** bump eslint from 7.16.0 to 7.17.0 ([#23](https://www.github.com/Fdawgs/node-unrtf/issues/23)) ([5731857](https://www.github.com/Fdawgs/node-unrtf/commit/5731857aea2c39b4edc4fa77b45365e226c0d57e))
* **deps-dev:** bump eslint-config-prettier from 6.15.0 to 7.1.0 ([549e4e5](https://www.github.com/Fdawgs/node-unrtf/commit/549e4e5fde4ef5c0e1ef146a25616d8a3825d0ee))
* **deps-dev:** bump eslint-config-prettier from 7.2.0 to 8.1.0 ([8e63b31](https://www.github.com/Fdawgs/node-unrtf/commit/8e63b31585b9e115ca28a67f2a21bc5bd7f0d4d8))
* **deps-dev:** bump eslint-plugin-jsdoc from 30.7.13 to 31.0.7 ([#26](https://www.github.com/Fdawgs/node-unrtf/issues/26)) ([1d1c7a9](https://www.github.com/Fdawgs/node-unrtf/commit/1d1c7a9d05288ac98a1b478f3b002bf58e60e4af))
* **deps-dev:** bump eslint-plugin-jsdoc from 30.7.8 to 30.7.9 ([#14](https://www.github.com/Fdawgs/node-unrtf/issues/14)) ([f50f024](https://www.github.com/Fdawgs/node-unrtf/commit/f50f0240038103949dd4a9cc8a69ee04ea19182f))
* **deps-dev:** bump eslint-plugin-jsdoc from 30.7.9 to 30.7.13 ([#22](https://www.github.com/Fdawgs/node-unrtf/issues/22)) ([55e3596](https://www.github.com/Fdawgs/node-unrtf/commit/55e3596a5b31ff93a6e4478cfbcfc3f03023cb39))
* **deps-dev:** bump eslint-plugin-jsdoc from 31.6.1 to 32.0.1 ([#37](https://www.github.com/Fdawgs/node-unrtf/issues/37)) ([c0f4b03](https://www.github.com/Fdawgs/node-unrtf/commit/c0f4b03c8312013cc03357cae0ae029d5cb1aece))
* **deps-dev:** bump eslint-plugin-jsdoc from 32.3.4 to 33.0.0 ([3580fac](https://www.github.com/Fdawgs/node-unrtf/commit/3580fac45d5bfa16a60f8d2ef63c5d5534e70760))
* **deps-dev:** bump eslint-plugin-jsdoc from 33.3.0 to 35.1.2 ([4f71e7a](https://www.github.com/Fdawgs/node-unrtf/commit/4f71e7a7beb690bc024938fd93983dbfc2ab5d2e))
* **deps-dev:** bump eslint-plugin-promise from 4.3.1 to 5.1.0 ([e239803](https://www.github.com/Fdawgs/node-unrtf/commit/e2398035f9f4697ebd1ada07ac7cd768c17c48d1))
* **deps-dev:** bump husky from 4.3.8 to 6.0.0 ([5f7bfa7](https://www.github.com/Fdawgs/node-unrtf/commit/5f7bfa714f3e2ae74a1101f3ec6015f3b4f5b75a))
* **deps-dev:** bump husky from 6.0.0 to 7.0.0 ([07b37d7](https://www.github.com/Fdawgs/node-unrtf/commit/07b37d77ea33b4cc81c53ff35507defa99cd36ee))
* **deps-dev:** bump jest from 26.6.3 to 27.0.3 ([abc4d64](https://www.github.com/Fdawgs/node-unrtf/commit/abc4d643ccac3a461ea21c2d328efc8279864faf))
* **deps-dev:** bump jsdoc-to-markdown from 6.0.1 to 7.0.0 ([#40](https://www.github.com/Fdawgs/node-unrtf/issues/40)) ([f2a21dd](https://www.github.com/Fdawgs/node-unrtf/commit/f2a21dd49d1eb48f1d99f302dd4a5743b9872f63))
* **deps-dev:** bump prettier from 2.2.1 to 2.3.0 ([0d40796](https://www.github.com/Fdawgs/node-unrtf/commit/0d40796aad1ad87218d99eb098272b6081e26de7))
* **deps-dev:** bump prettier from 2.3.0 to 2.3.1 ([1630193](https://www.github.com/Fdawgs/node-unrtf/commit/1630193c5c12b46c12f23dc5e0d833d33ce38e74))
* **deps-dev:** bump prettier from 2.3.1 to 2.3.2 ([5d59e46](https://www.github.com/Fdawgs/node-unrtf/commit/5d59e4645d85bcb685996fdab1f4ccc75c2a394f))
* **deps-dev:** bump typescript from 4.1.2 to 4.1.3 ([#16](https://www.github.com/Fdawgs/node-unrtf/issues/16)) ([8f1fba8](https://www.github.com/Fdawgs/node-unrtf/commit/8f1fba8abad45b783b1297fd551c44fe999d70e9))
* **deps-dev:** pin husky major version ([0033278](https://www.github.com/Fdawgs/node-unrtf/commit/0033278f7c1ee8ac337e1c326d47a7d7eee832a6))
* **deps-dev:** remove coveralls, replaced by github action ([85297fe](https://www.github.com/Fdawgs/node-unrtf/commit/85297fe2a51a4e5a49d0982591505da3e6bb89f0))
* **deps-dev:** remove cross-env ([706e648](https://www.github.com/Fdawgs/node-unrtf/commit/706e6489cb604bcf1dd602d2af8eea5748c28a50))
* **deps-dev:** remove eslint-plugin-json ([077b747](https://www.github.com/Fdawgs/node-unrtf/commit/077b747e9c054436dece7fa48956dbb4367a9f9c))
* **deps-dev:** remove jsinspect ([8bcff4c](https://www.github.com/Fdawgs/node-unrtf/commit/8bcff4cf2d2d5672c1b3fbfed9e54afedf765e16))
* **deps:** add semver dependency ([f5cd1e3](https://www.github.com/Fdawgs/node-unrtf/commit/f5cd1e32fa7595524d5f9f895496448fe6a183f9))
* **deps:** bump actions/github-script from v3.1.0 to v3.1.1 ([158f18e](https://www.github.com/Fdawgs/node-unrtf/commit/158f18ea648bbd4fef8f7248408a85c3cf38fd65))
* **deps:** bump actions/github-script from v3.1.1 to v4.0.2 ([c961bf7](https://www.github.com/Fdawgs/node-unrtf/commit/c961bf7a13bda5d984bd6d1c359e0e74143c2b28))
* **deps:** bump actions/setup-node from 2.1.5 to 2.2.0 ([fc0ff51](https://www.github.com/Fdawgs/node-unrtf/commit/fc0ff51c1de72a01660ce570a39761a1a490b1ec))
* **deps:** bump actions/stale from v3.0.17 to v3.0.18 ([de531f6](https://www.github.com/Fdawgs/node-unrtf/commit/de531f61b10641af13072a8b812746d5258597d7))
* **deps:** bump actions/upload-artifact from 2.2.3 to 2.2.4 ([00e3c19](https://www.github.com/Fdawgs/node-unrtf/commit/00e3c197e4c6440e887516ea6f050d1041ede7ee))
* **deps:** bump actions/upload-artifact from v2.2.2 to v2.2.3 ([d4be597](https://www.github.com/Fdawgs/node-unrtf/commit/d4be597ee830ce455fdf29d8a01ee9f5eb4fd05c))
* **deps:** bump fastify/github-action-merge-dependabot ([1df97c6](https://www.github.com/Fdawgs/node-unrtf/commit/1df97c64aabef93eda3d200e5b8e49134b557729))
* **deps:** bump fastify/github-action-merge-dependabot ([#13](https://www.github.com/Fdawgs/node-unrtf/issues/13)) ([c34519a](https://www.github.com/Fdawgs/node-unrtf/commit/c34519a8ccee882646da7f1318f5b3afe44b3f40))
* **deps:** bump GoogleCloudPlatform/release-please-action ([dd4e8f0](https://www.github.com/Fdawgs/node-unrtf/commit/dd4e8f0ff95787a703b6fe304d5ac9c7421343bd))
* **deps:** bump GoogleCloudPlatform/release-please-action ([a14c986](https://www.github.com/Fdawgs/node-unrtf/commit/a14c98666d775f90c3215fe433af442395dc9a28))
* **deps:** bump GoogleCloudPlatform/release-please-action ([51ce228](https://www.github.com/Fdawgs/node-unrtf/commit/51ce22869b697e90619444a7ef46160b5f7b841e))
* **deps:** bump GoogleCloudPlatform/release-please-action ([96112f5](https://www.github.com/Fdawgs/node-unrtf/commit/96112f50b010a09e8177d2f85bbd58a328138191))
* **deps:** bump typoci/spellcheck-action from v0.3.0 to v0.4.0 ([85fe1e5](https://www.github.com/Fdawgs/node-unrtf/commit/85fe1e5ee64e1138096612f81331ec0dba629245))
* **deps:** bump typoci/spellcheck-action from v0.4.0 to v1.1.0 ([c7d93a4](https://www.github.com/Fdawgs/node-unrtf/commit/c7d93a4101a1729026edbc8c412c40b8d8a01f05))
* **deps:** bump wagoid/commitlint-github-action from 3.1.0 to 3.1.4 ([b945c8a](https://www.github.com/Fdawgs/node-unrtf/commit/b945c8ad8ddf29f4f1f30c8622147f715a0784d1))
* **deps:** bump wagoid/commitlint-github-action from v2.0.3 to v2.2.3 ([a21c7d1](https://www.github.com/Fdawgs/node-unrtf/commit/a21c7d161d16e2157f0534d33d49eb8f8c6502c2))
* **deps:** bump wagoid/commitlint-github-action from v2.2.3 to v3.0.1 ([4085da2](https://www.github.com/Fdawgs/node-unrtf/commit/4085da2c05a15254ee8b47d2d88b288dedb2e430))
* **deps:** bump wagoid/commitlint-github-action from v3.0.1 to v3.0.6 ([a50d4c8](https://www.github.com/Fdawgs/node-unrtf/commit/a50d4c8416926350b94c899f698da55fac335373))
* **deps:** bump wagoid/commitlint-github-action from v3.0.6 to v3.1.0 ([9e3859b](https://www.github.com/Fdawgs/node-unrtf/commit/9e3859b94174070160f3e73607ce82666f7ab117))
* **deps:** specify minor and hotfix versions ([88d4723](https://www.github.com/Fdawgs/node-unrtf/commit/88d47233748faf2ecbfb8521938804c8ce6c0b31))
* remove `yarn` as package manager, revert to `npm` ([d5eb6ff](https://www.github.com/Fdawgs/node-unrtf/commit/d5eb6ffe6b61e35f6d4d5be7fc532bed89616e2b))
* **typescript:** enable strict option ([4073def](https://www.github.com/Fdawgs/node-unrtf/commit/4073defaee8adcd265483f9ff45ae84d1d41d403))
* update github-actions with dependabot ([5a48137](https://www.github.com/Fdawgs/node-unrtf/commit/5a481372f9480a328e0d6c4464051d80aa3ff891))


### Miscellaneous

* add commitlint husky `commit-msg` hook ([d0582c9](https://www.github.com/Fdawgs/node-unrtf/commit/d0582c966a4d001acbb8295cce2a1d723be77774))
* add pull request template ([5c9598f](https://www.github.com/Fdawgs/node-unrtf/commit/5c9598f3b6bcab028f5610acc0839e05e2af908b))
* add security.md ([1053356](https://www.github.com/Fdawgs/node-unrtf/commit/1053356ac22e9da0542c8a2b63dd57e9ab0cd1ba))
* add stale confg ([ce62d4b](https://www.github.com/Fdawgs/node-unrtf/commit/ce62d4be21c0c89e5bbdb0c01a55ac0f58823aeb))
* capitalise headings correctly ([e44fea6](https://www.github.com/Fdawgs/node-unrtf/commit/e44fea60ed0548192d4e58987db9e8cd34526131))
* **ci:** capitalise jobs and job step names ([b3fa36b](https://www.github.com/Fdawgs/node-unrtf/commit/b3fa36b34e1810fab13ef61f9c3f0f93a545f8ba))
* **ci:** replace `node-version` key with shorter `node` ([#80](https://www.github.com/Fdawgs/node-unrtf/issues/80)) ([daa20b9](https://www.github.com/Fdawgs/node-unrtf/commit/daa20b90fafdee3679a030071ddd09c586379354))
* **ci:** tidy job names ([4a8cb9b](https://www.github.com/Fdawgs/node-unrtf/commit/4a8cb9b4c687205b34774361bcf892d4f01039dc))
* **husky:** move doc step to pre-commit hook ([d576640](https://www.github.com/Fdawgs/node-unrtf/commit/d5766401b63dd39698f4a4788b3abbb3903cdade))
* ignore test wmf file ([8495ac6](https://www.github.com/Fdawgs/node-unrtf/commit/8495ac6721f1cef355bac05c2575834517a002af))
* **index:** rename const to reflect functionality ([baef0c1](https://www.github.com/Fdawgs/node-unrtf/commit/baef0c12ce391774f4feb115192d5c62a934621b))
* **jest:** enable resetmocks option ([f412b6e](https://www.github.com/Fdawgs/node-unrtf/commit/f412b6ea4706e0267449de086ae6e20fa64a735e))
* move travis file to root ([eb37d3d](https://www.github.com/Fdawgs/node-unrtf/commit/eb37d3d38b0a543138bd935bbdda80512e2f3e6c))
* **package:** add homepage and bug urls ([ed1f742](https://www.github.com/Fdawgs/node-unrtf/commit/ed1f7427dd4cad4bdc1ffa676d66254bd89f0561))
* **package:** move prettier config to separate file ([85e8dc7](https://www.github.com/Fdawgs/node-unrtf/commit/85e8dc7c64395fdf0c5716c2586c8b74d26eb300))
* prep release ([6b67991](https://www.github.com/Fdawgs/node-unrtf/commit/6b679919da51bf665318b1c96ca6a837a91a6e76))
* prep release ([18ba927](https://www.github.com/Fdawgs/node-unrtf/commit/18ba9279a4be3391b8a557176b9ab7487d964934))
* prep release ([1c5d91f](https://www.github.com/Fdawgs/node-unrtf/commit/1c5d91f3541344b4ea4969d02c32e8da3c4943bf))
* prep release ([bbb96b1](https://www.github.com/Fdawgs/node-unrtf/commit/bbb96b1f6c004fd55a9435bb0cd6909f9920a4a6))
* prep release ([ded1071](https://www.github.com/Fdawgs/node-unrtf/commit/ded1071ebdb41b520efb461ee3e3375a943a8e36))
* prep release ([8854608](https://www.github.com/Fdawgs/node-unrtf/commit/885460871225065b0b6c9dc5fd551cd481817fee))
* prep release ([66af693](https://www.github.com/Fdawgs/node-unrtf/commit/66af69324e7ecabdac1582a416935abaded50871))
* prep release ([b31c69b](https://www.github.com/Fdawgs/node-unrtf/commit/b31c69bdb73b386c6b704ba4a74e51ccba9ec9af))
* prep release ([0bc9cb8](https://www.github.com/Fdawgs/node-unrtf/commit/0bc9cb89942706e7a26bd2e2b0ea075cd565ff36))
* **prettier:** create .prettierignore ([d1419a7](https://www.github.com/Fdawgs/node-unrtf/commit/d1419a7231e8def7a06362c86c75bcb1d70c6206))
* **prettierignore:** add `api.md` ([d262550](https://www.github.com/Fdawgs/node-unrtf/commit/d26255032dbe52a752ba3487e1298f7a878ce552))
* **readme:** add linebreaks between badges ([4f3b04d](https://www.github.com/Fdawgs/node-unrtf/commit/4f3b04df9dd956b063496e4a06a048465606e716))
* **readme:** capitalise headings correctly ([bdf0cfe](https://www.github.com/Fdawgs/node-unrtf/commit/bdf0cfe8102fbeccaf1e5d75f54a21c60b6ca82f))
* **readme:** prettier badge shape ([6365287](https://www.github.com/Fdawgs/node-unrtf/commit/636528733b7ad94d8ad292cb6b5cb0199b03ff59))
* release 1.0.8 ([#39](https://www.github.com/Fdawgs/node-unrtf/issues/39)) ([c0a35f5](https://www.github.com/Fdawgs/node-unrtf/commit/c0a35f51ff51f13473f0f1df8e36799b6abedcb8))
* release 1.1.0 ([82f45d3](https://www.github.com/Fdawgs/node-unrtf/commit/82f45d3761ee08c6d73904871516cd996b5c4750))
* release 1.1.1 ([7bb5507](https://www.github.com/Fdawgs/node-unrtf/commit/7bb55079e7ecca22b5665e4b9b15285bcea0c81a))
* release 2.0.0 ([892e57f](https://www.github.com/Fdawgs/node-unrtf/commit/892e57f22b64da29621fbe28635d3a0f677a15a8))
* release 2.0.1 ([#79](https://www.github.com/Fdawgs/node-unrtf/issues/79)) ([7b31e18](https://www.github.com/Fdawgs/node-unrtf/commit/7b31e1870cd82db07075d8eeffcce719ed16fc2c))
* remove old .env files from gitignore ([de48f1b](https://www.github.com/Fdawgs/node-unrtf/commit/de48f1b35c450eb88f38b3eb2c1db7a52b1f8622))
* remove support for nodejs v10 ([3882be1](https://www.github.com/Fdawgs/node-unrtf/commit/3882be131c755ee0302d085290285518a6c59f89))
* replace stalebot with github action ([7c0a1d5](https://www.github.com/Fdawgs/node-unrtf/commit/7c0a1d5bf4f59916684b795c9c8e6e68eecc5114))
* **scripts:** do not lint ts and tsx files ([e4f342c](https://www.github.com/Fdawgs/node-unrtf/commit/e4f342ce6d2d9818a6cb1f3584d43afe23444eb7))
* **scripts:** rename `jest-coverage` to `jest:coverage` ([3f9a7e3](https://www.github.com/Fdawgs/node-unrtf/commit/3f9a7e3883c517f76560dd9691464c2b9c9c6026))
* **scripts:** rename test scripts ([9cd61d5](https://www.github.com/Fdawgs/node-unrtf/commit/9cd61d50ce80e2e67071dd2579d98995d7d0cba6))
* shorten husky pre-push script ([b836196](https://www.github.com/Fdawgs/node-unrtf/commit/b83619650c2535663ea257e5c01640cf0514afff))
* stop excess coverage files being generated ([6dbc8aa](https://www.github.com/Fdawgs/node-unrtf/commit/6dbc8aadea717b4417d7d7ea6c906705716e5d8d))
* **tests:** use apa header style for describe name params ([d9eb832](https://www.github.com/Fdawgs/node-unrtf/commit/d9eb8329df2ed655e5347a0d7bf59924db914205))
* use default prettier options for trailing commas and quotes ([f7fae44](https://www.github.com/Fdawgs/node-unrtf/commit/f7fae44ac3c45cbba3d69a2be9dbd9fd37bb343f))
* **vscode:** add `redhat.vscode-yaml` as recommended extension ([3780dca](https://www.github.com/Fdawgs/node-unrtf/commit/3780dca0459b44b079023675d24e2a43bffb138d))
* **vscode:** add `updateImportsOnFileMove` setting ([e697f76](https://www.github.com/Fdawgs/node-unrtf/commit/e697f7696cd406e6fb966f518c205084899abb9c))
* **vscode:** add workspace settings and extensions ([ae24583](https://www.github.com/Fdawgs/node-unrtf/commit/ae24583c5e311d4cadd7309126fd44b66f1aa2bb))
* **vscode:** disable red hat telemetry ([8b4caad](https://www.github.com/Fdawgs/node-unrtf/commit/8b4caad58580d02d1ffb2a125a6fac6f3c2ca101))
* **vscode:** remove conflicting prettier ext setting ([6cb6586](https://www.github.com/Fdawgs/node-unrtf/commit/6cb65868e72b7180cd068b204d578a58444e3f24))
* **vscode:** remove user space config setting ([a86bb2f](https://www.github.com/Fdawgs/node-unrtf/commit/a86bb2f1b55bba6701198c37661e9933eba6f4ec))
* **workflows:** remove `stale.yml` ([463ac3d](https://www.github.com/Fdawgs/node-unrtf/commit/463ac3db39f26a4d40b67cc286ed876251fc7aca))
* **workflows:** rename ci and perf sections ([b0a475a](https://www.github.com/Fdawgs/node-unrtf/commit/b0a475a3cc386fdd060ba09ac11f1be5b9d58704))
* **workflows:** rename spellcheck workflow ([ee0dbd3](https://www.github.com/Fdawgs/node-unrtf/commit/ee0dbd393870b4af95cf91ca9de55111561ffe9e))
* **workflows:** tidy node-version syntax ([f4b7d6c](https://www.github.com/Fdawgs/node-unrtf/commit/f4b7d6c47bbb93803c7299470ff0743faf3eb5f4))


### Continuous Integration

* add cd action to publish to npm ([b572364](https://www.github.com/Fdawgs/node-unrtf/commit/b5723647d697d0afc1589834b68934bb6ceb3f4b))
* add cleanup-run job ([7ce1032](https://www.github.com/Fdawgs/node-unrtf/commit/7ce1032a6aa7bcb5b87fe788b067f35039a5bc0a))
* add commit-lint job ([e57fd6d](https://www.github.com/Fdawgs/node-unrtf/commit/e57fd6dbc76ba45c6b8289fef7f44e90e4e615bd))
* add link check workflow ([7ffd9ac](https://www.github.com/Fdawgs/node-unrtf/commit/7ffd9ac3214c4f3e72515c7a8fc91594d8aba2d5))
* add linting job; expand scope of jobs ([0c4fea4](https://www.github.com/Fdawgs/node-unrtf/commit/0c4fea4b7c767f9fea691c1e632f991013a6153c))
* add nodejs v16 to unit test matrix ([172788c](https://www.github.com/Fdawgs/node-unrtf/commit/172788ca2712a00db4d7427a6bc4ed200430ce88))
* automate release and changelog generation ([935c14f](https://www.github.com/Fdawgs/node-unrtf/commit/935c14f8b0cbef17e21c270aee9e194ae05021f4))
* automatically merge dependabot pull requests on pass build stage ([1992e25](https://www.github.com/Fdawgs/node-unrtf/commit/1992e250587ae32791b042fa4bf7d67b542c56f7))
* **automerge:** move automerge job into new workflow ([f28a137](https://www.github.com/Fdawgs/node-unrtf/commit/f28a137e79748a0b2384fbc73d0acd8ecbc2732e))
* bump actions/setup-node from v1 to v2 ([13a7440](https://www.github.com/Fdawgs/node-unrtf/commit/13a74405195c024e3a25269c91a4ec56a9f11348))
* **cd:** move perf optimizations and refactoring into same section ([ff79849](https://www.github.com/Fdawgs/node-unrtf/commit/ff79849b8d9ae5f89c004e0998267725cdde91ed))
* **ci:** disable homebrew analytics for macos builds ([#101](https://www.github.com/Fdawgs/node-unrtf/issues/101)) ([de448c3](https://www.github.com/Fdawgs/node-unrtf/commit/de448c3399267922cfc839332bc715c8d735158d))
* **ci:** ignore dependabot prs for commit message linting ([b32dd59](https://www.github.com/Fdawgs/node-unrtf/commit/b32dd590aee01f30430d30f04c80dd8b46c67e82))
* **codeql:** remove autobuild action ([e52e385](https://www.github.com/Fdawgs/node-unrtf/commit/e52e385991344fde7a3b267c96de3d3e9cd915b2))
* **codeql:** specify more query suites ([9d82703](https://www.github.com/Fdawgs/node-unrtf/commit/9d82703b4a6c0924c4b4ccbfeca67ca14ae6341e))
* **dependabot:** ignore husky updates ([b757eea](https://www.github.com/Fdawgs/node-unrtf/commit/b757eea955d28dad016a4550e163689a787745aa))
* disable long running homebrew cleanup tasks ([2b4357d](https://www.github.com/Fdawgs/node-unrtf/commit/2b4357d91269baecad8050b8ed1282d831b57eca))
* do not run coveralls steps/jobs on forks ([9c02577](https://www.github.com/Fdawgs/node-unrtf/commit/9c02577dec21b45ac386a5ab5222e4c46086da86))
* fix key usage in `action/setup-node` ([ad3eaf6](https://www.github.com/Fdawgs/node-unrtf/commit/ad3eaf61ae48d6c3a3e8aadcdcd60c3435736d0c))
* freeze yarn lockfile on publish ([49fd10b](https://www.github.com/Fdawgs/node-unrtf/commit/49fd10b7e19fc7506f61b94bf4ec0ee29d45ce24))
* **github-actions:** set `flag-name` for parallel coverage tests ([5da256a](https://www.github.com/Fdawgs/node-unrtf/commit/5da256add9dcb2a3de29620e501a613c72c19099))
* **github-actions:** set semver for coverallsapp ([12ba04b](https://www.github.com/Fdawgs/node-unrtf/commit/12ba04b0989743c389e72b2844a54215d88a561f))
* ignore scripts on publish ([dcc4e74](https://www.github.com/Fdawgs/node-unrtf/commit/dcc4e74ff39c5ccaa1887af34d29f232134cf6c6))
* **link-check:** fix skip regex ([4c0f3e6](https://www.github.com/Fdawgs/node-unrtf/commit/4c0f3e66443a85864b6659f5483f244dcf64ada4))
* **link-check:** ignore links to lib binaries ([d664122](https://www.github.com/Fdawgs/node-unrtf/commit/d664122dd6cae034e3cbf0b0443f9005cd58dea0))
* **link-check:** reduce frequency from daily to monthly ([#95](https://www.github.com/Fdawgs/node-unrtf/issues/95)) ([42f60b8](https://www.github.com/Fdawgs/node-unrtf/commit/42f60b88c3ea1cf2f017e2790584b2e11c186f77))
* **linkcheck:** extend ignored urls ([98d9043](https://www.github.com/Fdawgs/node-unrtf/commit/98d9043b0ed5c9532d174eb39f926f6aca8229e3))
* **lint-check:** compress patterns ([22ce818](https://www.github.com/Fdawgs/node-unrtf/commit/22ce818af722da11ec8f62d90075c8142ec3f058))
* merge unit test jobs ([ce6daa6](https://www.github.com/Fdawgs/node-unrtf/commit/ce6daa6a14686fe98163272eb23ea0fac2d8083d))
* move dependency installs to correct step ([d684320](https://www.github.com/Fdawgs/node-unrtf/commit/d68432044e21d2966b5ee8b8d96672a51b55772e))
* refactor `codeql-analysis.yml` ([732569c](https://www.github.com/Fdawgs/node-unrtf/commit/732569c2b297fbd9b45f96b63023c178a165f0f3))
* remove cache actions as they use lock file ([dd30c10](https://www.github.com/Fdawgs/node-unrtf/commit/dd30c1096c71f32c71c7da48b5df5b9b670b137d))
* remove redundant javascript dictionary ([0c126f2](https://www.github.com/Fdawgs/node-unrtf/commit/0c126f20f58004aba298ec837459911dca707347))
* replace travis-ci with github actions ([0257e9a](https://www.github.com/Fdawgs/node-unrtf/commit/0257e9a9c97595d0d461227c0202d1ea31986968))
* replace typo ci app with action ([49f651f](https://www.github.com/Fdawgs/node-unrtf/commit/49f651fb565122c758e52ad86fce49f2b2668bdd))
* require lint job on automerge ([724dd46](https://www.github.com/Fdawgs/node-unrtf/commit/724dd4696a66dff1bf548c5635d2866cc56cdc29))
* revert linux os to `ubuntu-latest` from `20.04` ([bd83ca6](https://www.github.com/Fdawgs/node-unrtf/commit/bd83ca6834649cabd93390c151e4f9613fb06d8d))
* **stale:** shorten workflow name ([e4719b3](https://www.github.com/Fdawgs/node-unrtf/commit/e4719b3f89af2029ecbbf27cd512e5c386c6784a))
* **travis:** add npm deploy stage ([63c802f](https://www.github.com/Fdawgs/node-unrtf/commit/63c802f59dd79d2097443079d02dc393463b605f))
* **travis:** add osx test stage ([f7e81ed](https://www.github.com/Fdawgs/node-unrtf/commit/f7e81eda89aecfbb965ea5a999c77d051ab3cc2f))
* **typo-ci:** add `ydh` to list of excluded words ([31b5a83](https://www.github.com/Fdawgs/node-unrtf/commit/31b5a838d07de6f813858e91a23f1b84da2349b0))
* use yarn cache of node dependencies if present ([ae2a887](https://www.github.com/Fdawgs/node-unrtf/commit/ae2a887ac7d690d68a7d9f4ee0ba470c28fb18e6))
* **workflows:** fix release types to account for bots ([6aba0bd](https://www.github.com/Fdawgs/node-unrtf/commit/6aba0bda2e1a5c8a90c27fd7e048238aa5247ce5))
* **workflows:** move release steps into `cd` workflow ([#45](https://www.github.com/Fdawgs/node-unrtf/issues/45)) ([568d0e4](https://www.github.com/Fdawgs/node-unrtf/commit/568d0e42616ffc5c9e80fa196759e31314e414a1))
* **workflows:** run only on push and pulls to master branch ([52eda60](https://www.github.com/Fdawgs/node-unrtf/commit/52eda60f80e5fe4c5d6d596a3121cf4d11c250fe))

### [2.0.1](https://www.github.com/Fdawgs/node-unrtf/compare/v2.0.0...v2.0.1) (2021-06-15)


### Bug Fixes

* **index:** normalize file paths ([#89](https://www.github.com/Fdawgs/node-unrtf/issues/89)) ([9660cce](https://www.github.com/Fdawgs/node-unrtf/commit/9660ccea347e9153984658640781bd054cd02bae))
* **index:** throw error if file param is not rtf ([e3552bb](https://www.github.com/Fdawgs/node-unrtf/commit/e3552bb07ccfcf9a663cf633298eb312b8e2556c))


### Documentation

* **readme:** remove repetition ([08758ff](https://www.github.com/Fdawgs/node-unrtf/commit/08758ff6024c2ba251f29a4d03f40624ed80ba77))


### Miscellaneous

* **ci:** replace `node-version` key with shorter `node` ([#80](https://www.github.com/Fdawgs/node-unrtf/issues/80)) ([6beeef2](https://www.github.com/Fdawgs/node-unrtf/commit/6beeef254a394e1f0e29678a02a2a16920c57dfc))
* **workflows:** remove `stale.yml` ([e914a39](https://www.github.com/Fdawgs/node-unrtf/commit/e914a39b7c3f7fb5afd4a3d447d9f2083c52891b))


### Continuous Integration

* **cd:** move perf optimizations and refactoring into same section ([7ab68ec](https://www.github.com/Fdawgs/node-unrtf/commit/7ab68ec5f9a18d930eb60c7c549361e02bb71335))
* fix key usage in `action/setup-node` ([d3ddf47](https://www.github.com/Fdawgs/node-unrtf/commit/d3ddf4712a99df2fef95122c9a3fde6180ebac9f))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 33.3.0 to 35.1.2 ([bb5f80e](https://www.github.com/Fdawgs/node-unrtf/commit/bb5f80ea3ba9379f05bc6b88b4b251f7be628e1f))
* **deps-dev:** bump jest from 26.6.3 to 27.0.3 ([ff94919](https://www.github.com/Fdawgs/node-unrtf/commit/ff94919ac60b2af179b69edf71f193491d7f8f04))
* **deps-dev:** bump prettier from 2.2.1 to 2.3.0 ([61478d5](https://www.github.com/Fdawgs/node-unrtf/commit/61478d5af073ab082f7f5a84f7c794eb1052f371))
* **deps-dev:** bump prettier from 2.3.0 to 2.3.1 ([538a5a4](https://www.github.com/Fdawgs/node-unrtf/commit/538a5a4a035f2611bc9c20f845481531a3d61bff))
* **deps:** bump GoogleCloudPlatform/release-please-action ([671e4e0](https://www.github.com/Fdawgs/node-unrtf/commit/671e4e0be73750e775fdb070db422ee77c247827))
* **deps:** bump wagoid/commitlint-github-action from 3.1.0 to 3.1.4 ([da1c9a1](https://www.github.com/Fdawgs/node-unrtf/commit/da1c9a1132704dde34e11c78b1524fdc0ff40c20))

## [2.0.0](https://www.github.com/Fdawgs/node-unrtf/compare/v1.1.1...v2.0.0) (2021-04-29)


### ⚠ BREAKING CHANGES

* remove support for nodejs v10, as it is EOL as of 2021-04-30

### Dependencies

* **deps:** bump actions/github-script from v3.1.0 to v3.1.1 ([eff3805](https://www.github.com/Fdawgs/node-unrtf/commit/eff380528a5ec8cdbd270a51824ac508be533557))


### Miscellaneous

* remove support for nodejs v10 ([2ae95c7](https://www.github.com/Fdawgs/node-unrtf/commit/2ae95c7d64e74019ce2f89dc89a5dfc9e53f4bb5))


### Documentation

* grammar and readability fixes ([35e9d0c](https://www.github.com/Fdawgs/node-unrtf/commit/35e9d0c88f8fcaed7c611251a8d27ed8dd97acee))


### Continuous Integration

* add cleanup-run job ([37eda95](https://www.github.com/Fdawgs/node-unrtf/commit/37eda951536b2a4373b5c3bd68a62130969c33b7))
* add nodejs v16 to unit test matrix ([eac6377](https://www.github.com/Fdawgs/node-unrtf/commit/eac63778c91030edaee86a0a2f02b617bb5c3b4e))
* do not run coveralls steps/jobs on forks ([cb9a6f8](https://www.github.com/Fdawgs/node-unrtf/commit/cb9a6f8d2d8fcb23d3f03b52f0ea3bcfe9b4fa35))
* **link-check:** fix skip regex ([be010ea](https://www.github.com/Fdawgs/node-unrtf/commit/be010ea51fa1942045ab20425ed4aca60411bd9b))
* **link-check:** ignore links to lib binaries ([822a03a](https://www.github.com/Fdawgs/node-unrtf/commit/822a03a03784162ddaf81f2b2e90173f45ef525a))

### [1.1.1](https://www.github.com/Fdawgs/node-unrtf/compare/v1.1.0...v1.1.1) (2021-03-29)


### Miscellaneous

* **husky:** move doc step to pre-commit hook ([bbca3e5](https://www.github.com/Fdawgs/node-unrtf/commit/bbca3e5a4101e391bd8a48062cab48444e4637aa))
* **index:** make version param optional ([3476ad0](https://www.github.com/Fdawgs/node-unrtf/commit/3476ad06099abb55ab1895797016baaeeb513979))
* **prettierignore:** add `api.md` ([15ec35e](https://www.github.com/Fdawgs/node-unrtf/commit/15ec35ef6eb2263196cd133b0fac2aaa2a66d264))


### Dependencies

* **deps-dev:** bump husky from 4.3.8 to 6.0.0 ([3832a5b](https://www.github.com/Fdawgs/node-unrtf/commit/3832a5ba4fcb6d24ec8a76641e5000cb6926beec))
* **deps:** bump GoogleCloudPlatform/release-please-action ([387d34b](https://www.github.com/Fdawgs/node-unrtf/commit/387d34b4c41a1db2a29be1a382ba67d3531c7f89))
* **deps:** bump typoci/spellcheck-action from v0.3.0 to v0.4.0 ([13fd1b3](https://www.github.com/Fdawgs/node-unrtf/commit/13fd1b3c2dbcc59e500a8d5b2140c06ff2aa4def))


### Continuous Integration

* **automerge:** move automerge job into new workflow ([1f6c64c](https://www.github.com/Fdawgs/node-unrtf/commit/1f6c64c39ef0f8a58472ce49f6054575ca88c37b))
* **ci:** ignore dependabot prs for commit message linting ([4db8bdc](https://www.github.com/Fdawgs/node-unrtf/commit/4db8bdc0459c247d3f7adb9baf803c95b808ca1a))
* **stale:** shorten workflow name ([84f86ae](https://www.github.com/Fdawgs/node-unrtf/commit/84f86aed55f86388f5a0aa10c6190fdd2b24793a))
* **workflows:** run only on push and pulls to master branch ([d993574](https://www.github.com/Fdawgs/node-unrtf/commit/d99357417fff0f073a4569f0f686761a2ddfd8e0))

## [1.1.0](https://www.github.com/Fdawgs/node-unrtf/compare/v1.0.8...v1.1.0) (2021-03-08)


### Features

* **index:** add binary version checking for options ([3e91223](https://www.github.com/Fdawgs/node-unrtf/commit/3e91223aba763abd8be5d3775f2c0443cd24423b))


### Bug Fixes

* **index:** correct misspelling of `received` in error string ([cda01e6](https://www.github.com/Fdawgs/node-unrtf/commit/cda01e6f1a2e460dd9b86b9cd9438e2f3c5936f0))


### Continuous Integration

* **workflows:** move release steps into `cd` workflow ([#45](https://www.github.com/Fdawgs/node-unrtf/issues/45)) ([7713848](https://www.github.com/Fdawgs/node-unrtf/commit/7713848037ff066bca84665cc358328ba8681cca))


### Documentation

* **changelog:** add compare links ([8b51b55](https://www.github.com/Fdawgs/node-unrtf/commit/8b51b5529f3bc923987492ab9277750f674fe7a6))
* **changelog:** add h1 header ([ec72246](https://www.github.com/Fdawgs/node-unrtf/commit/ec7224681d629ce5d45faf526553a685d29aaf64))


### Miscellaneous

* **package:** move prettier config to separate file ([8a20a35](https://www.github.com/Fdawgs/node-unrtf/commit/8a20a35bb4582d2da9a121186885b83ab1e10dd4))
* **prettier:** create .prettierignore ([0fbe516](https://www.github.com/Fdawgs/node-unrtf/commit/0fbe5160ba88664869789cafb2db530734391fec))
* **workflows:** rename ci and perf sections ([7674345](https://www.github.com/Fdawgs/node-unrtf/commit/7674345fd82c737413322164232d68f31874dbe0))


### Dependencies

* **deps:** add semver dependency ([a1e8467](https://www.github.com/Fdawgs/node-unrtf/commit/a1e8467f2b8768380fadfc504f920161b4fd90f1))
* **deps:** bump actions/stale from v3.0.17 to v3.0.18 ([0e95561](https://www.github.com/Fdawgs/node-unrtf/commit/0e95561bf0d796e4266037008ea394c0fcf39977))
* **deps:** bump fastify/github-action-merge-dependabot ([733272f](https://www.github.com/Fdawgs/node-unrtf/commit/733272f0e5d3288fbed109847f09a4a653dcfe3f))
* **deps:** bump GoogleCloudPlatform/release-please-action ([f5bfb06](https://www.github.com/Fdawgs/node-unrtf/commit/f5bfb0655c1a78027ef31045b8cc685d1dfc693b))
* **deps:** bump wagoid/commitlint-github-action from v3.0.1 to v3.0.6 ([fa23fec](https://www.github.com/Fdawgs/node-unrtf/commit/fa23fec20eab9aafad9e5e17eb2b19f8b16011f6))

### [1.0.8](https://www.github.com/Fdawgs/node-unrtf/compare/v1.0.7...v1.0.8) (2021-03-02)

### Documentation

-   bump coc from v1.4.0 to v2.0.0 ([3f1a367](https://www.github.com/Fdawgs/node-unrtf/commit/3f1a36790321cd9d95ef4c7d3cc4d846b40cac1f))
-   **contributing:** add documentation style ([17b373b](https://www.github.com/Fdawgs/node-unrtf/commit/17b373b54dd75f2b72f1c2585ef9025fb9f4254d))
-   **readme:** fix broken link ([a0d360f](https://www.github.com/Fdawgs/node-unrtf/commit/a0d360fa8c7e495b6cc5164a2417d74b532098cd))
-   **readme:** grammar ([68aba60](https://www.github.com/Fdawgs/node-unrtf/commit/68aba60fe2400dbab646bca4a0c7c0018a9a1278))
-   **readme:** revamp intro section ([86edaa3](https://www.github.com/Fdawgs/node-unrtf/commit/86edaa3fd33309f4d684bf92a09022cda5bd4380))
-   **readme:** shorten links ([bb80196](https://www.github.com/Fdawgs/node-unrtf/commit/bb801961d63b4de98c1662185822a3f70e02ba2c))

### Dependencies

-   **dependabot:** set commit message prefix; lower pull limit ([26cac51](https://www.github.com/Fdawgs/node-unrtf/commit/26cac5147257b317c053e930284d4e4c34be8673))
-   **deps-dev:** add husky for git hook handling ([537497c](https://www.github.com/Fdawgs/node-unrtf/commit/537497c3bc112f2b2e3d6c9467235ea94c2cb8c1))
-   **deps-dev:** bump @commitlint/cli from 11.0.0 to 12.0.1 ([#41](https://www.github.com/Fdawgs/node-unrtf/issues/41)) ([9b2d9b4](https://www.github.com/Fdawgs/node-unrtf/commit/9b2d9b4bd5289caf24a9f988ea03b2b4719244f2))
-   **deps-dev:** bump @commitlint/config-conventional ([e1b6506](https://www.github.com/Fdawgs/node-unrtf/commit/e1b6506710a5d30b539cdf4cde15161251e325b7))
-   **deps-dev:** bump eslint-config-prettier from 7.2.0 to 8.1.0 ([cd7a091](https://www.github.com/Fdawgs/node-unrtf/commit/cd7a091622e740040a6915b0ee5b23f3b6be5c74))
-   **deps-dev:** bump eslint-plugin-jsdoc from 31.6.1 to 32.0.1 ([#37](https://www.github.com/Fdawgs/node-unrtf/issues/37)) ([5fa4c1f](https://www.github.com/Fdawgs/node-unrtf/commit/5fa4c1fb81d1cd990703fbe2d601ad9801a65824))
-   **deps-dev:** bump jsdoc-to-markdown from 6.0.1 to 7.0.0 ([#40](https://www.github.com/Fdawgs/node-unrtf/issues/40)) ([00306f0](https://www.github.com/Fdawgs/node-unrtf/commit/00306f0728251860f15ac9bb8b8e785d414663fc))
-   **deps-dev:** pin husky major version ([994c53b](https://www.github.com/Fdawgs/node-unrtf/commit/994c53b8ad4e5211998723c4293edb861b45bcad))
-   **deps-dev:** remove coveralls, replaced by github action ([d602daf](https://www.github.com/Fdawgs/node-unrtf/commit/d602daf8258389f54be800520989fdfd740e438a))
-   **deps-dev:** remove jsinspect ([ddb0e60](https://www.github.com/Fdawgs/node-unrtf/commit/ddb0e60a40c68d08f02f4ebb763d2f884d6ca42b))
-   **deps:** bump wagoid/commitlint-github-action from v2.0.3 to v2.2.3 ([eab0134](https://www.github.com/Fdawgs/node-unrtf/commit/eab01346c6e655a56ad14796a69511e673070f93))
-   **deps:** bump wagoid/commitlint-github-action from v2.2.3 to v3.0.1 ([4226100](https://www.github.com/Fdawgs/node-unrtf/commit/42261005af9c3df7f94b1cf33e7aa698f4de505c))
-   **deps:** specify minor and hotfix versions ([57bcbd1](https://www.github.com/Fdawgs/node-unrtf/commit/57bcbd19e299a461c46f6db48c166137be114675))

### Miscellaneous

-   add commit-lint job ([b2842b4](https://www.github.com/Fdawgs/node-unrtf/commit/b2842b4601d3a9a63feb90cccafa711041688871))
-   add commitlint husky `commit-msg` hook ([47b8438](https://www.github.com/Fdawgs/node-unrtf/commit/47b843828fc76dc6d2fdf08e3d82eaa6b475332a))
-   add link check workflow ([d56c153](https://www.github.com/Fdawgs/node-unrtf/commit/d56c1539a97831d47bfd89058c66ae9989331727))
-   add pull request template ([41593f5](https://www.github.com/Fdawgs/node-unrtf/commit/41593f5b02a9a5147fd020d64844798653d1a382))
-   automate release and changelog generation ([84113f7](https://www.github.com/Fdawgs/node-unrtf/commit/84113f718879320e4a7b3b4fec791c7d25640a88))
-   capitalise headings correctly ([3c302f8](https://www.github.com/Fdawgs/node-unrtf/commit/3c302f890cf60e07d66be9ce81d816272832d936))
-   **ci:** capitalise jobs and job step names ([e4fb8d1](https://www.github.com/Fdawgs/node-unrtf/commit/e4fb8d1be1f20fd56c91ca46ce25746958a353d2))
-   **codeql:** remove autobuild action ([27d7e86](https://www.github.com/Fdawgs/node-unrtf/commit/27d7e8665e868aed22ee1649a8d9a4c14d08e60e))
-   **dependabot:** ignore husky updates ([234088c](https://www.github.com/Fdawgs/node-unrtf/commit/234088cf875367eb36a7de71e00d67526b776021))
-   disable long running homebrew cleanup tasks ([812de48](https://www.github.com/Fdawgs/node-unrtf/commit/812de481769a4697f0b72bccd55cf28cce9c08b0))
-   **github-actions:** set `flag-name` for parallel coverage tests ([7dccf38](https://www.github.com/Fdawgs/node-unrtf/commit/7dccf38f1049a7b13aa41ba61ad79d9d17353a10))
-   **github-actions:** set semver for coverallsapp ([723b833](https://www.github.com/Fdawgs/node-unrtf/commit/723b83368798e4528674570e2d197211c62eb256))
-   ignore test wmf file ([550287f](https://www.github.com/Fdawgs/node-unrtf/commit/550287f72b0fcefa664fccb46dc387e33f3612d7))
-   **jest:** enable resetmocks option ([c7bb98c](https://www.github.com/Fdawgs/node-unrtf/commit/c7bb98cfd60d72410594ead53eb24421efe6f6bc))
-   **linkcheck:** extend ignored urls ([c8b7162](https://www.github.com/Fdawgs/node-unrtf/commit/c8b716299a2f72b21248ccb40ee837df43e85be5))
-   **lint-check:** compress patterns ([5f1d76c](https://www.github.com/Fdawgs/node-unrtf/commit/5f1d76cfee0fbf144b878df489fef6c4cf677a0c))
-   **readme:** add linebreaks between badges ([07af20d](https://www.github.com/Fdawgs/node-unrtf/commit/07af20d688a150de69813c9b61d8dbf596a32368))
-   **readme:** capitalise headings correctly ([ef91208](https://www.github.com/Fdawgs/node-unrtf/commit/ef9120895eaa5af667d2d35734720ba209f900ba))
-   **readme:** prettier badge shape ([ea67e5c](https://www.github.com/Fdawgs/node-unrtf/commit/ea67e5c457c27babe56496dff7ab9f87afc1520f))
-   remove cache actions as they use lock file ([c8ca340](https://www.github.com/Fdawgs/node-unrtf/commit/c8ca34057f5e91cf5d651e19d4074b2a33b6f034))
-   replace stalebot with github action ([2d9339b](https://www.github.com/Fdawgs/node-unrtf/commit/2d9339b3802e9457f3b030bf3086ff21bfe04ff5))
-   replace typo ci app with action ([8c5f4f9](https://www.github.com/Fdawgs/node-unrtf/commit/8c5f4f9e3e78effd7cd60430d703e1de87b0a4db))
-   revert linux os to `ubuntu-latest` from `20.04` ([cfe6b9f](https://www.github.com/Fdawgs/node-unrtf/commit/cfe6b9fc4faa56eddc197a99f9b508d3561f19ef))
-   **scripts:** rename `jest-coverage` to `jest:coverage` ([093e365](https://www.github.com/Fdawgs/node-unrtf/commit/093e365df746efe86fb6114b155ff9db52a485c4))
-   shorten husky pre-push script ([5e03f99](https://www.github.com/Fdawgs/node-unrtf/commit/5e03f99a37f166b0f36e7ea59d12415ef680ac26))
-   stop excess coverage files being generated ([15be36a](https://www.github.com/Fdawgs/node-unrtf/commit/15be36ae88c9b67f902e215a29ea51688eebe5d9))
-   **tests:** use apa header style for describe name params ([78eef74](https://www.github.com/Fdawgs/node-unrtf/commit/78eef74fe7fbe16f8b11b57592e804a02697f35b))
-   **vscode:** add `redhat.vscode-yaml` as recommended extension ([aeb9a16](https://www.github.com/Fdawgs/node-unrtf/commit/aeb9a168ad12e66f793a43bb0b6e1a035e10158e))
-   **vscode:** add `updateImportsOnFileMove` setting ([bcf3342](https://www.github.com/Fdawgs/node-unrtf/commit/bcf3342f05f202ed4d98a434e284ba9676072879))
-   **vscode:** add workspace settings and extensions ([0704d1d](https://www.github.com/Fdawgs/node-unrtf/commit/0704d1d4e0bff12e6ed229268ad93408df6a0927))
-   **vscode:** remove conflicting prettier ext setting ([cb2fe3d](https://www.github.com/Fdawgs/node-unrtf/commit/cb2fe3db555bb31af20790fba9b014ad46f17eaa))
-   **workflows:** fix release types to account for bots ([477dae4](https://www.github.com/Fdawgs/node-unrtf/commit/477dae4e6485ff6147595c4427557ca7d0432d95))
-   **workflows:** rename spellcheck workflow ([f8a2de7](https://www.github.com/Fdawgs/node-unrtf/commit/f8a2de727acff05772f604c3a9f3f1e9b7d219e3))
-   **workflows:** tidy node-version syntax ([5ff6186](https://www.github.com/Fdawgs/node-unrtf/commit/5ff61868b093b3d6df9c9f45d5fc13d4c31f638b))

### [1.0.7](https://www.github.com/Fdawgs/node-unrtf/compare/v1.0.6...v1.0.7) (2021-01-18)

-   build: add typoci config file ([673d667](https://github.com/Fdawgs/node-unrtf/commit/673d667))
-   build: remove `yarn` as package manager, revert to `npm` ([92bfa05](https://github.com/Fdawgs/node-unrtf/commit/92bfa05))
-   build(deps-dev): bump eslint-plugin-jsdoc from 30.7.13 to 31.0.7 (#26) ([3a385b0](https://github.com/Fdawgs/node-unrtf/commit/3a385b0)), closes [#26](https://github.com/Fdawgs/node-unrtf/issues/26)
-   fix: remove lockfile ([3f1f06f](https://github.com/Fdawgs/node-unrtf/commit/3f1f06f))
-   fix: script calls ([92c1d12](https://github.com/Fdawgs/node-unrtf/commit/92c1d12))
-   ci: ignore scripts on publish ([51bbc50](https://github.com/Fdawgs/node-unrtf/commit/51bbc50))
-   ci: remove redundant javascript dictionary ([5bb970f](https://github.com/Fdawgs/node-unrtf/commit/5bb970f))
-   ci(typo-ci): add `ydh` to list of excluded words ([ce0dd7d](https://github.com/Fdawgs/node-unrtf/commit/ce0dd7d))
-   chore(package): add homepage and bug urls ([0296e85](https://github.com/Fdawgs/node-unrtf/commit/0296e85))
-   docs: update contact email ([b1ab606](https://github.com/Fdawgs/node-unrtf/commit/b1ab606))
-   docs(contributing): update yarn link ([e1c4bc0](https://github.com/Fdawgs/node-unrtf/commit/e1c4bc0))

### [1.0.6](https://www.github.com/Fdawgs/node-unrtf/compare/v1.0.5...v1.0.6) (2021-01-03)

-   build(deps-dev): bump eslint from 7.16.0 to 7.17.0 (#23) ([906057f](https://github.com/Fdawgs/node-unrtf/commit/906057f)), closes [#23](https://github.com/Fdawgs/node-unrtf/issues/23)
-   build(deps-dev): bump eslint-plugin-jsdoc from 30.7.9 to 30.7.13 (#22) ([3a6a54c](https://github.com/Fdawgs/node-unrtf/commit/3a6a54c)), closes [#22](https://github.com/Fdawgs/node-unrtf/issues/22)
-   build(deps-dev): remove cross-env ([3fb81e4](https://github.com/Fdawgs/node-unrtf/commit/3fb81e4))
-   ci: refactor `codeql-analysis.yml` ([ed2cf30](https://github.com/Fdawgs/node-unrtf/commit/ed2cf30))
-   ci: use yarn cache of node dependencies if present ([fe7171a](https://github.com/Fdawgs/node-unrtf/commit/fe7171a))
-   ci(codeql): specify more query suites ([0bf1d99](https://github.com/Fdawgs/node-unrtf/commit/0bf1d99))
-   chore: remove old .env files from gitignore ([1fcc8dd](https://github.com/Fdawgs/node-unrtf/commit/1fcc8dd))
-   docs(readme): update examples ([22d5943](https://github.com/Fdawgs/node-unrtf/commit/22d5943))
-   test(index): function with no options param passed ([72c97af](https://github.com/Fdawgs/node-unrtf/commit/72c97af))
-   refactor(index): remove unused default branch ([aee6c76](https://github.com/Fdawgs/node-unrtf/commit/aee6c76))
-   style(ci): tidy job names ([78bc55e](https://github.com/Fdawgs/node-unrtf/commit/78bc55e))

### [1.0.5](https://www.github.com/Fdawgs/node-unrtf/compare/v1.0.4...v1.0.5) (2020-12-28)

-   build: update github-actions with dependabot ([e905020](https://github.com/Fdawgs/node-unrtf/commit/e905020))
-   build(deps-dev): bump cross-env from 7.0.2 to 7.0.3 ([3c99ec3](https://github.com/Fdawgs/node-unrtf/commit/3c99ec3))
-   build(deps-dev): bump eslint from 7.14.0 to 7.16.0 ([96b903f](https://github.com/Fdawgs/node-unrtf/commit/96b903f))
-   build(deps-dev): bump eslint-config-prettier from 6.15.0 to 7.1.0 ([a9c02e6](https://github.com/Fdawgs/node-unrtf/commit/a9c02e6))
-   build(deps-dev): bump eslint-plugin-jsdoc from 30.7.8 to 30.7.9 (#14) ([ff9c9d2](https://github.com/Fdawgs/node-unrtf/commit/ff9c9d2)), closes [#14](https://github.com/Fdawgs/node-unrtf/issues/14)
-   build(deps-dev): bump typescript from 4.1.2 to 4.1.3 (#16) ([372bd4b](https://github.com/Fdawgs/node-unrtf/commit/372bd4b)), closes [#16](https://github.com/Fdawgs/node-unrtf/issues/16)
-   build(deps-dev): remove eslint-plugin-json ([ae41058](https://github.com/Fdawgs/node-unrtf/commit/ae41058))
-   build(deps): bump fastify/github-action-merge-dependabot (#13) ([dbda5ae](https://github.com/Fdawgs/node-unrtf/commit/dbda5ae)), closes [#13](https://github.com/Fdawgs/node-unrtf/issues/13)
-   build(typescript): enable strict option ([4c5344a](https://github.com/Fdawgs/node-unrtf/commit/4c5344a))
-   docs(contributing): update prettier script ([c2df110](https://github.com/Fdawgs/node-unrtf/commit/c2df110))
-   docs(readme): remove abbreviation ([cca9eb4](https://github.com/Fdawgs/node-unrtf/commit/cca9eb4))
-   ci: add linting job; expand scope of jobs ([2abbfc1](https://github.com/Fdawgs/node-unrtf/commit/2abbfc1))
-   ci: automatically merge dependabot pull requests on pass build stage ([3c7b40a](https://github.com/Fdawgs/node-unrtf/commit/3c7b40a))
-   ci: bump actions/setup-node from v1 to v2 ([3ec3d8b](https://github.com/Fdawgs/node-unrtf/commit/3ec3d8b))
-   ci: freeze yarn lockfile on publish ([65135d6](https://github.com/Fdawgs/node-unrtf/commit/65135d6))
-   ci: merge unit test jobs ([4fe02c8](https://github.com/Fdawgs/node-unrtf/commit/4fe02c8))
-   ci: move dependency installs to correct step ([5bf2bd9](https://github.com/Fdawgs/node-unrtf/commit/5bf2bd9))
-   ci: require lint job on automerge ([ab41541](https://github.com/Fdawgs/node-unrtf/commit/ab41541))
-   style: use default prettier options for trailing commas and quotes ([c4f9fad](https://github.com/Fdawgs/node-unrtf/commit/c4f9fad))
-   fix(scripts): test script ([b5a59e0](https://github.com/Fdawgs/node-unrtf/commit/b5a59e0))
-   chore: add stale confg ([777a58e](https://github.com/Fdawgs/node-unrtf/commit/777a58e))
-   chore(scripts): rename test scripts ([e0cee9f](https://github.com/Fdawgs/node-unrtf/commit/e0cee9f))

### [1.0.4](https://www.github.com/Fdawgs/node-unrtf/compare/v1.0.3...v1.0.4) (2020-12-01)

-   build(deps-dev): bump dev dependencies ([25a4bb4](https://github.com/Fdawgs/node-unrtf/commit/25a4bb4))
-   chore: add security.md ([821352e](https://github.com/Fdawgs/node-unrtf/commit/821352e))
-   ci: add cd action to publish to npm ([709bef7](https://github.com/Fdawgs/node-unrtf/commit/709bef7))
-   ci: replace travis-ci with github actions ([70d23d8](https://github.com/Fdawgs/node-unrtf/commit/70d23d8))

### [1.0.3](https://www.github.com/Fdawgs/node-unrtf/compare/v1.0.2...v1.0.3) (2020-11-10)

-   build(deps-dev): bump dev dependencies ([2e96ea0](https://github.com/Fdawgs/node-unrtf/commit/2e96ea0))
-   fix(index): return promise objects ([863d9f7](https://github.com/Fdawgs/node-unrtf/commit/863d9f7))
-   docs(index): correct return jsdoc tag for parseoptions function ([59bb581](https://github.com/Fdawgs/node-unrtf/commit/59bb581))
-   refactor(index): concat invalid args provided into error object ([dd1084e](https://github.com/Fdawgs/node-unrtf/commit/dd1084e))
-   chore(index): rename const to reflect functionality ([a0624e9](https://github.com/Fdawgs/node-unrtf/commit/a0624e9))

### [1.0.2](https://www.github.com/Fdawgs/node-unrtf/compare/v1.0.1...v1.0.2) (2020-10-29)

-   build(deps-dev): bump dev dependencies ([79e05f9](https://github.com/Fdawgs/node-unrtf/commit/79e05f9))
-   docs: grammar and spelling fixes ([f5fb9e3](https://github.com/Fdawgs/node-unrtf/commit/f5fb9e3))
-   fix(index): check file exists before attempting to parse ([41daf30](https://github.com/Fdawgs/node-unrtf/commit/41daf30))

### [1.0.1](https://www.github.com/Fdawgs/node-unrtf/compare/v1.0.0...v1.0.1) (2020-10-27)

-   build(deps-dev): bump dev dependencies ([cf5cd8b](https://github.com/Fdawgs/node-unrtf/commit/cf5cd8b))
-   ci(travis): add npm deploy stage ([d194055](https://github.com/Fdawgs/node-unrtf/commit/d194055))
-   fix(index): catch empty file vars before unrtf parses them ([789afbd](https://github.com/Fdawgs/node-unrtf/commit/789afbd))

## [1.0.0](https://www.github.com/Fdawgs/node-unrtf/compare/v0.0.2...v1.0.0) (2020-10-26)

-   build(deps-dev): bump dev dependencies ([dd3f926](https://github.com/Fdawgs/node-unrtf/commit/dd3f926))
-   refactor(index): move optional option param for convert function to end ([02b95a9](https://github.com/Fdawgs/node-unrtf/commit/02b95a9))
-   chore(scripts): do not lint ts and tsx files ([f40b335](https://github.com/Fdawgs/node-unrtf/commit/f40b335))
-   feat(index): add typescript definitions ([e2203a6](https://github.com/Fdawgs/node-unrtf/commit/e2203a6))

### BREAKING CHANGE

-   `usage of convert(option, file) should be replaced with convert(file, option)`

### 0.0.2 (2020-10-21)

-   docs: add api docs and examples ([59f1fc3](https://github.com/Fdawgs/node-unrtf/commit/59f1fc3))
-   docs(index): add note to jsdoc tags about select options errors ([d1d9964](https://github.com/Fdawgs/node-unrtf/commit/d1d9964))
-   docs(index): clarify on required unrtf binary version ([2c74019](https://github.com/Fdawgs/node-unrtf/commit/2c74019))
-   docs(readme): add osx usage instructions ([2b64327](https://github.com/Fdawgs/node-unrtf/commit/2b64327))
-   tests: add more complex test rtf file ([20ed0c6](https://github.com/Fdawgs/node-unrtf/commit/20ed0c6))
-   tests(index): extend tests ([9386e78](https://github.com/Fdawgs/node-unrtf/commit/9386e78))
-   tests(index): remove broken vt test ([a7ac427](https://github.com/Fdawgs/node-unrtf/commit/a7ac427))
-   build(deps-dev): add is-html to test html responses ([c03e25d](https://github.com/Fdawgs/node-unrtf/commit/c03e25d))
-   ci(travis): add osx test stage ([53f9c34](https://github.com/Fdawgs/node-unrtf/commit/53f9c34))
-   chore: move travis file to root ([6158b29](https://github.com/Fdawgs/node-unrtf/commit/6158b29))
-   feat(index): add support for output for ps and wpml formats ([df88f2b](https://github.com/Fdawgs/node-unrtf/commit/df88f2b))
