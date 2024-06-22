# Changelog

All notable changes to this project will be documented in this file.

## [5.0.2](https://github.com/Fdawgs/node-unrtf/compare/v5.0.1...v5.0.2) (2024-06-22)


### Dependencies

* **deps-dev:** bump dev dependencies ([e1b7b66](https://github.com/Fdawgs/node-unrtf/commit/e1b7b668f8fc794154fe6b142ab59305bb57d50b))
* **deps:** bump semver from 7.6.0 to 7.6.2 ([ee59252](https://github.com/Fdawgs/node-unrtf/commit/ee59252753949c30c77f464667edb55868cfe71e))


### Miscellaneous

* **package:** change author email ([a2bc85a](https://github.com/Fdawgs/node-unrtf/commit/a2bc85a4e5e9fa1f543ce091eb2ddf9eed5892d3))
* **src/lib:** remove unused files ([26b67bc](https://github.com/Fdawgs/node-unrtf/commit/26b67bca89dc3dd79186e81c7e8cd9fff46ac7c3))
* **src:** move options to own typedef ([598d52c](https://github.com/Fdawgs/node-unrtf/commit/598d52c0cc82255391e7a44498ad7feb349887c7))


### Continuous integration

* **ci:** add node 22 to test matrix ([f924a5e](https://github.com/Fdawgs/node-unrtf/commit/f924a5ecb46efaabd04849e9700824f1a01f342b))
* **deps:** bump coverallsapp/github-action from 2.2.3 to 2.3.0 ([#375](https://github.com/Fdawgs/node-unrtf/issues/375)) ([ed31f3b](https://github.com/Fdawgs/node-unrtf/commit/ed31f3bb5e32e8845d2d58b850f8f2467897ad40))

## [5.0.1](https://github.com/Fdawgs/node-unrtf/compare/v5.0.0...v5.0.1) (2024-04-30)


### Continuous integration

* **ci:** audit package signatures and provenance attestations ([9966ace](https://github.com/Fdawgs/node-unrtf/commit/9966acefc813a16b1ebd6737cb8582168af659a2))
* **deps:** bump wagoid/commitlint-github-action from 5 to 6 ([#365](https://github.com/Fdawgs/node-unrtf/issues/365)) ([8a16660](https://github.com/Fdawgs/node-unrtf/commit/8a16660819d5e107bca89cbbcb3938b0949394f4))
* use latest node lts version ([172b71d](https://github.com/Fdawgs/node-unrtf/commit/172b71da99ca3ced2d93fa0918373f61a1000f4f))


### Improvements

* **index:** use `slice()` over `startsWith()` ([054a0e5](https://github.com/Fdawgs/node-unrtf/commit/054a0e57e78276d7e047728872f907b978bbf3fd))

## [5.0.0](https://github.com/Fdawgs/node-unrtf/compare/v4.1.7...v5.0.0) (2024-03-12)


### ⚠ BREAKING CHANGES

* **index:** `unrtfPath` and `unrtfVersion` fields can no longer be changed after class has been initialised

### Dependencies

* **deps-dev:** bump dev dependencies ([b148274](https://github.com/Fdawgs/node-unrtf/commit/b14827437ebe75a7963c5d3185a5dc773595eec3))
* **deps-dev:** bump the commitlint group with 2 updates ([#362](https://github.com/Fdawgs/node-unrtf/issues/362)) ([37b420e](https://github.com/Fdawgs/node-unrtf/commit/37b420e5671507b7697bf3a9378324fcd9442b5c))


### Miscellaneous

* ignore types dir ([4378b45](https://github.com/Fdawgs/node-unrtf/commit/4378b457661e8075a2a3306dfe99d6a19f63d904))
* **index:** inline comment re export types ([c6c4e02](https://github.com/Fdawgs/node-unrtf/commit/c6c4e023220f4349d5e444ce5152d71af8a23abc))
* **index:** remove backticks from string ([85bee42](https://github.com/Fdawgs/node-unrtf/commit/85bee42a1301e75e021493d237b065dc94721bcc))
* stop types being committed ([0e1e412](https://github.com/Fdawgs/node-unrtf/commit/0e1e412ab6a11439e40f286426ee517fd765e71c))


### Continuous integration

* **cd:** standardise [@fdawgs](https://github.com/fdawgs) cd workflows ([3e34f52](https://github.com/Fdawgs/node-unrtf/commit/3e34f529fc4dc2acf93ff87878eb427046894612))
* **ci:** standardise [@fdawgs](https://github.com/fdawgs) ci workflows ([bdff8a4](https://github.com/Fdawgs/node-unrtf/commit/bdff8a4868bfbc4a458abc8b4beafcd45b023813))
* **dependabot:** add `[@eslint-community](https://github.com/eslint-community)` scoped deps to eslint group ([0985f77](https://github.com/Fdawgs/node-unrtf/commit/0985f77127caf0805f4d9d23016b7c03e9af9be0))


### Improvements

* enable strict type checking ([da3b3b4](https://github.com/Fdawgs/node-unrtf/commit/da3b3b4cce312ef70757bf3af2d5e42cdbfb3f3f))
* **index:** make `unrtfPath` and `unrtfVersion` fields private ([e2c3c50](https://github.com/Fdawgs/node-unrtf/commit/e2c3c50e92fb83f97326ad61e63d4c03f3493396))


### Documentation

* remove outdated api docs; refer to type defs instead ([eb30adc](https://github.com/Fdawgs/node-unrtf/commit/eb30adc819b36944a1ddbac1a37898240c92bc65))

## [4.1.7](https://github.com/Fdawgs/node-unrtf/compare/v4.1.6...v4.1.7) (2024-02-22)


### Dependencies

* **deps-dev:** bump dev dependencies ([598315a](https://github.com/Fdawgs/node-unrtf/commit/598315a9b5c1f69511f4da776beef9d9f9fee7da))
* **deps-dev:** bump husky from 8.0.3 to 9.0.6 ([#358](https://github.com/Fdawgs/node-unrtf/issues/358)) ([ce62a47](https://github.com/Fdawgs/node-unrtf/commit/ce62a47fcd680a14cebf598d3c7032e38d853790))
* **deps:** bump semver from 7.5.4 to 7.6.0 ([35d25c9](https://github.com/Fdawgs/node-unrtf/commit/35d25c99942082722fc087eb4b9ea7c834d42748))


### Miscellaneous

* **.husky:** migrate hooks to v9 style ([d12a911](https://github.com/Fdawgs/node-unrtf/commit/d12a9115dfb9b9be2abd55b5ff1f258c698ddc42))
* **.vscode:** fix `prettier.prettierPath` setting ([9542260](https://github.com/Fdawgs/node-unrtf/commit/9542260ac77c553f5360d5937d1f9cd9e4746927))


### Continuous integration

* **cd:** use `main` environment for publish-npm job ([014981c](https://github.com/Fdawgs/node-unrtf/commit/014981cc1d0b72fcb37b8e0901bacc76e86348b5))
* **deps:** bump actions/dependency-review-action from 3 to 4 ([#357](https://github.com/Fdawgs/node-unrtf/issues/357)) ([8533389](https://github.com/Fdawgs/node-unrtf/commit/8533389d3459f0b5f88d86885032beafba561dff))


### Improvements

* **index:** swap negated condition ([ee06254](https://github.com/Fdawgs/node-unrtf/commit/ee06254a57c5cbadaadbf51a61912121c982e29b))
* **index:** use `string.StartsWith()` over `regex.test()` ([d2e21d6](https://github.com/Fdawgs/node-unrtf/commit/d2e21d61f096cbd0d313b7001377bc08aace99bd))
* **index:** use constant comparison order ([1267519](https://github.com/Fdawgs/node-unrtf/commit/1267519dd8efe72ddf48503021879f7a5a627cf2))

## [4.1.6](https://github.com/Fdawgs/node-unrtf/compare/v4.1.5...v4.1.6) (2024-01-24)


### Dependencies

* **deps-dev:** bump dev dependencies ([788cc97](https://github.com/Fdawgs/node-unrtf/commit/788cc97b0987c4d42e8c05ccd34eac9980c5b21f))


### Miscellaneous

* **.vscode:** use local prettier version ([ffcf4ed](https://github.com/Fdawgs/node-unrtf/commit/ffcf4ed85718a0bb0a07471b2b270e351a4903d6))
* **scripts/license-checker:** handle old license arrays or missing ([ba2420d](https://github.com/Fdawgs/node-unrtf/commit/ba2420dc0b43a7904a1763e06d457d4f56d37a0a))
* **tsconfig:** remove `lib`; `target` will be used in absence ([168250f](https://github.com/Fdawgs/node-unrtf/commit/168250fb2bd3ade3bd5002d1484d8ecb16702273))


### Continuous integration

* **cd:** param order ([6debe1b](https://github.com/Fdawgs/node-unrtf/commit/6debe1b46bda7e634e698e9639bb45e7d070e781))

## [4.1.5](https://github.com/Fdawgs/node-unrtf/compare/v4.1.4...v4.1.5) (2024-01-16)


### Continuous integration

* **cd:** set github package to public ([c5fb131](https://github.com/Fdawgs/node-unrtf/commit/c5fb1314af81eb8299fb47b5bb7494b7021419d0))

## [4.1.4](https://github.com/Fdawgs/node-unrtf/compare/v4.1.3...v4.1.4) (2024-01-16)


### Miscellaneous

* **package:** fix `repository` structure ([9a7a9bc](https://github.com/Fdawgs/node-unrtf/commit/9a7a9bc23fcdb74bb729918de29921f124c8722b))


### Continuous integration

* **cd:** add missing `id-token` for github package job ([c9b7667](https://github.com/Fdawgs/node-unrtf/commit/c9b766703eef3b9603e3f5ba9f5cf17e57446285))

## [4.1.3](https://github.com/Fdawgs/node-unrtf/compare/v4.1.2...v4.1.3) (2024-01-16)


### Dependencies

* **deps-dev:** bump dev dependencies ([1f4458e](https://github.com/Fdawgs/node-unrtf/commit/1f4458e061ae3ce529bb290fbc7e2271b3525d22))


### Miscellaneous

* **.prettierignore:** ignore auto-generate types ([7ea841d](https://github.com/Fdawgs/node-unrtf/commit/7ea841d1a4e05a62cdedf7c69610c28627cdc6e4))
* jsdoc comments must be complete sentences ([d21ba63](https://github.com/Fdawgs/node-unrtf/commit/d21ba6318375fa93d59c081bbd6b17041011dd04))
* **license:** update license year ([9546a48](https://github.com/Fdawgs/node-unrtf/commit/9546a48aa54f296761d35089bd177a017e3d4ae3))
* **package:** add `lint:fix` script ([02f147d](https://github.com/Fdawgs/node-unrtf/commit/02f147d971d85d8152c807029902233fc37b0d1f))
* **package:** run `lint:prettier` in `test` script ([4a22932](https://github.com/Fdawgs/node-unrtf/commit/4a2293210a65be4c508280cd1389bbc1b76e9392))
* use shared files from `fdawgs/.github` ([264b1dd](https://github.com/Fdawgs/node-unrtf/commit/264b1dddb235adc6850831ee1e3dd74d091e9616))


### Continuous integration

* **automerge:** optimise inline js scripts ([cafd051](https://github.com/Fdawgs/node-unrtf/commit/cafd051b4a231d76ad763671699d4753ebfac5b2))
* **cd:** add github packages publish job ([028bd85](https://github.com/Fdawgs/node-unrtf/commit/028bd851f97ea99cd083570c132fe5c9376f5660))
* **dependabot:** ignore release-please-action major updates ([8c78af3](https://github.com/Fdawgs/node-unrtf/commit/8c78af32d608bf39edc79ae6cbd3c617978499ef))
* **deps:** bump actions/upload-artifact from 3 to 4 ([#343](https://github.com/Fdawgs/node-unrtf/issues/343)) ([85f2c54](https://github.com/Fdawgs/node-unrtf/commit/85f2c54c55753745ddb3e1411d9038450ce5fff3))
* **deps:** bump github/codeql-action from 2 to 3 ([#342](https://github.com/Fdawgs/node-unrtf/issues/342)) ([43f4436](https://github.com/Fdawgs/node-unrtf/commit/43f4436fb6a14a137f6482ec5c30ae1b47cd006c))


### Documentation

* **readme:** update links ([8ee9a87](https://github.com/Fdawgs/node-unrtf/commit/8ee9a87f6377d00fcf37db1e1a94ab7c160d33c6))

## [4.1.2](https://github.com/Fdawgs/node-unrtf/compare/v4.1.1...v4.1.2) (2023-11-29)


### Dependencies

* **deps-dev:** bump dev dependencies ([162716c](https://github.com/Fdawgs/node-unrtf/commit/162716c05235aea409ef30c97fd4ed6ced2c4396))
* **deps-dev:** bump the commitlint group with 2 updates ([#334](https://github.com/Fdawgs/node-unrtf/issues/334)) ([1dd812d](https://github.com/Fdawgs/node-unrtf/commit/1dd812d81a0bfc05a270771cf831aa6de7211edf))
* **deps-dev:** bump the eslint group with 1 update ([#335](https://github.com/Fdawgs/node-unrtf/issues/335)) ([6adc0a6](https://github.com/Fdawgs/node-unrtf/commit/6adc0a6695c5d7b559c1e6e2df85fb12f1851385))
* **deps-dev:** remove broken eslint-plugin-security-node ([45e8dcb](https://github.com/Fdawgs/node-unrtf/commit/45e8dcb94ebbf79435063511425fd6f130c0f90d))


### Miscellaneous

* **index:** add inline comment explaining regex cache ([5a33b91](https://github.com/Fdawgs/node-unrtf/commit/5a33b916670e5a8917ae0d51a0cff63a624ae405))


### Continuous integration

* **deps:** bump actions/github-script from 6 to 7 ([#337](https://github.com/Fdawgs/node-unrtf/issues/337)) ([31972e5](https://github.com/Fdawgs/node-unrtf/commit/31972e5e2c9373bf5c4f94baf8b55c76f759ba3a))
* **deps:** bump actions/setup-node from 3 to 4 ([#333](https://github.com/Fdawgs/node-unrtf/issues/333)) ([1794f54](https://github.com/Fdawgs/node-unrtf/commit/1794f5441b71ba3143c15905ac1cc547a286f973))


### Documentation

* **readme:** fix broken ci badge link ([ba00408](https://github.com/Fdawgs/node-unrtf/commit/ba0040823255a6af116a3bcbacaeec57d266e544))
* **readme:** fix npm badge ([ec9d90e](https://github.com/Fdawgs/node-unrtf/commit/ec9d90e070ef0133626c8d577a229bbd788c96a3))
* **readme:** update examples ([26f5fcb](https://github.com/Fdawgs/node-unrtf/commit/26f5fcb0b10e1145659170831c1375f8b6003a69))

## [4.1.1](https://github.com/Fdawgs/node-unrtf/compare/v4.1.0...v4.1.1) (2023-10-23)


### Dependencies

* **deps-dev:** add eslint-community/eslint-plugin-eslint-comments ([5e28633](https://github.com/Fdawgs/node-unrtf/commit/5e286336f7afdddcfef3523be78ee5388d3ed1a9))


### Miscellaneous

* **.vscode:** add github-markdown-preview to recommended extension ([f1d98f8](https://github.com/Fdawgs/node-unrtf/commit/f1d98f82ed0bcc66b532fc6e4a82787fb5977e4a))
* **.vscode:** add gitlens to recommended extensions ([879578f](https://github.com/Fdawgs/node-unrtf/commit/879578f29ae840871a0a4acacc642f09fb57269f))
* **scripts/license-checker:** update link to deprecated list ([46ffc53](https://github.com/Fdawgs/node-unrtf/commit/46ffc5397304754375c87867c3f5bd0e5adf27c0))
* **tsconfig:** use es2022 lib ([504bc84](https://github.com/Fdawgs/node-unrtf/commit/504bc84bac31e594c656f9af399ffe169db8a1b3))


### Improvements

* **index:** cache regex literals ([eb46c0c](https://github.com/Fdawgs/node-unrtf/commit/eb46c0cd794a8254190192706e0ddf170c7c80b5))


### Documentation

* **readme:** remove section re passing bin path for unix installs ([99b59d7](https://github.com/Fdawgs/node-unrtf/commit/99b59d758a87ab3face30cce8deb29cefa7fca24))

## [4.1.0](https://github.com/Fdawgs/node-unrtf/compare/v4.0.2...v4.1.0) (2023-09-25)


### Features

* **index:** use binary from path env variable if not passed as param ([402289b](https://github.com/Fdawgs/node-unrtf/commit/402289b6e1013a3707b7ee5f0319d93488c1bc64))


### Dependencies

* **deps-dev:** bump eslint from 8.49.0 to 8.50.0 ([9c0c7fd](https://github.com/Fdawgs/node-unrtf/commit/9c0c7fd2b8e5f5a56780f582090009c88deeaa70))


### Improvements

* **index:** check bin version once on class init, not every func call ([1085984](https://github.com/Fdawgs/node-unrtf/commit/1085984fb808b729f79bd97c423c2bc5df562866))
* **index:** create `acceptedOptions` obj on init, not every func call ([4a9816b](https://github.com/Fdawgs/node-unrtf/commit/4a9816bfda1de634eb6b774dc426e8ea017a1e86))

## [4.0.2](https://github.com/Fdawgs/node-unrtf/compare/v4.0.1...v4.0.2) (2023-09-23)


### Bug fixes

* **index:** do not mask error code if unknown ([70c4a11](https://github.com/Fdawgs/node-unrtf/commit/70c4a117c5cd19548fd5fb507b1af3477337d06a))

## [4.0.1](https://github.com/Fdawgs/node-unrtf/compare/v4.0.0...v4.0.1) (2023-09-23)


### Miscellaneous

* **.gitattributes:** auto lf eol all files ([baacf05](https://github.com/Fdawgs/node-unrtf/commit/baacf05475767dc2a4398b70c874ab1a82e79118))
* **tsconfig:** target es2022 ([0284215](https://github.com/Fdawgs/node-unrtf/commit/0284215989abe35e61b6e3bd6530d9901478ce37))


### Continuous integration

* **dependabot:** group dependabot updates ([0ad4307](https://github.com/Fdawgs/node-unrtf/commit/0ad43079ccea8d4bc8caca691f12d1f17a05f64e))

## [4.0.0](https://github.com/Fdawgs/node-unrtf/compare/v3.1.7...v4.0.0) (2023-09-21)


### ⚠ BREAKING CHANGES

* dropped support for EOL node 14 and 16

### Bug fixes

* **index:** type build ([1a25f55](https://github.com/Fdawgs/node-unrtf/commit/1a25f55e195b672f3bb95d3a4601b80ac0d96cf9))


### Dependencies

* **deps-dev:** add @types/jest ([9499665](https://github.com/Fdawgs/node-unrtf/commit/949966531803e0be01e5b2c9917975a825fdfc36))
* **deps-dev:** bump dev dependencies ([78801a8](https://github.com/Fdawgs/node-unrtf/commit/78801a8a31d3b288b465cae78e00448a1dd719e1))


### Miscellaneous

* **.eslintrc:** bump ecmaversion to 2023 ([552b51b](https://github.com/Fdawgs/node-unrtf/commit/552b51bf48a6d4a48a567b5aacffe199cad36bef))
* add missing `.gitattributes` file ([c91218b](https://github.com/Fdawgs/node-unrtf/commit/c91218b469b51c1f168e456d440aed9260dd2193))
* change comment blocks with one line into single block ([794a75f](https://github.com/Fdawgs/node-unrtf/commit/794a75f0d2ac87a0b33db07f471463af55452ecf))
* destruct upath module import ([#316](https://github.com/Fdawgs/node-unrtf/issues/316)) ([8ae0fdc](https://github.com/Fdawgs/node-unrtf/commit/8ae0fdc90955e8e1f261b6d146030948b75c564c))
* drop support for node 14 and 16 ([#317](https://github.com/Fdawgs/node-unrtf/issues/317)) ([680aa50](https://github.com/Fdawgs/node-unrtf/commit/680aa50c0bda79b16f3ae2d8bbe43c844d2fbd6c))
* **index:** add seg fault error code ([07510c1](https://github.com/Fdawgs/node-unrtf/commit/07510c166fa898725c0a23100a30a19e0e2b6eb0))
* **package:** explicitly declare js module type ([e43ea37](https://github.com/Fdawgs/node-unrtf/commit/e43ea37b82c51b01ee318f5b191933d9dcf9612b))
* **scripts/license-checker:** declare `copyLeftLicenses` type ([0b7e98b](https://github.com/Fdawgs/node-unrtf/commit/0b7e98b98f57bf53afbd28a3bfb65ff1d1f4889f))
* **scripts/license-checker:** ignore invalid ts error ([57f79e9](https://github.com/Fdawgs/node-unrtf/commit/57f79e99897212661919f6cb21f441e519d319ae))
* **tsconfig:** disable strict mode ([#319](https://github.com/Fdawgs/node-unrtf/issues/319)) ([fd6f241](https://github.com/Fdawgs/node-unrtf/commit/fd6f24142a5b3dd756c57c9f6ceca1e9af3d3b63))
* **tsconfig:** enable checkJs compiler option ([f2502e6](https://github.com/Fdawgs/node-unrtf/commit/f2502e692af6bc44e9b8d7d016c4cb804541eae1))
* **tsconfig:** set module to nodenext ([25254c2](https://github.com/Fdawgs/node-unrtf/commit/25254c2a6dea0fc01346c699822ddae58670a557))
* use `[@see](https://github.com/see)` jsdoc tag for inline comment links ([cf7c27d](https://github.com/Fdawgs/node-unrtf/commit/cf7c27d65249d7cb2393fe5df5f8516414a8cae7))


### Continuous integration

* **deps:** bump actions/checkout from 3 to 4 ([#322](https://github.com/Fdawgs/node-unrtf/issues/322)) ([4f8e2a5](https://github.com/Fdawgs/node-unrtf/commit/4f8e2a5b39bbe0d7ae82a77462f0ba2ca792646e))
* **deps:** bump coverallsapp/github-action from 2.2.1 to 2.2.3 ([#323](https://github.com/Fdawgs/node-unrtf/issues/323)) ([327547e](https://github.com/Fdawgs/node-unrtf/commit/327547e901bf4363ad1fb3b248522ded28d1fc47))


### Improvements

* **index:** replace `hasOwnProperty.call()` with `hasOwn()` ([fbedb02](https://github.com/Fdawgs/node-unrtf/commit/fbedb02e6a4bfe71180f42f253d9b871c9bc45d0))
* **index:** return error messages ([#320](https://github.com/Fdawgs/node-unrtf/issues/320)) ([df842df](https://github.com/Fdawgs/node-unrtf/commit/df842dfaa7342f18d22b2e662321578914ebf31c))
* use `node:` prefix to bypass require.cache call for builtins ([db1b1a8](https://github.com/Fdawgs/node-unrtf/commit/db1b1a8c053a489041a69c3a1496fad9c51ed976))


### Documentation

* **readme:** update chaining example with `.catch()` ([a925c05](https://github.com/Fdawgs/node-unrtf/commit/a925c05de96df0034d00180388dc6c6a387c287e))

## [3.1.7](https://github.com/Fdawgs/node-unrtf/compare/v3.1.6...v3.1.7) (2023-08-16)


### Dependencies

* **deps-dev:** bump dev dependencies ([71bd998](https://github.com/Fdawgs/node-unrtf/commit/71bd9980ec0f9878b814d458600cca59d576dbc3))
* **deps-dev:** bump eslint-config-prettier from 8.10.0 to 9.0.0 ([#311](https://github.com/Fdawgs/node-unrtf/issues/311)) ([a7e5354](https://github.com/Fdawgs/node-unrtf/commit/a7e53546966b4fc7ff3a417dd91be493b235a9a3))
* **deps:** bump semver from 7.5.3 to 7.5.4 ([168bf47](https://github.com/Fdawgs/node-unrtf/commit/168bf47c61f14374ad821d8143658dd2d4a25c70))


### Miscellaneous

* **.eslintrc:** error on google closure jsdoc syntax ([7fb28c7](https://github.com/Fdawgs/node-unrtf/commit/7fb28c7e8ddfa500267b470ea26d04f5edc9f97b))
* fix import order for linting ([5c210f3](https://github.com/Fdawgs/node-unrtf/commit/5c210f3430d7eca599678913e540f279d48f1b46))
* remove outdated inline eslint rule ([349fd26](https://github.com/Fdawgs/node-unrtf/commit/349fd26e169c0d96b9575c337ad664080b1d49ac))
* rename `lint:prettier` scripts to reflect their function ([#303](https://github.com/Fdawgs/node-unrtf/issues/303)) ([37116c8](https://github.com/Fdawgs/node-unrtf/commit/37116c88e06e71e8212e00b25ea79fd1e2e0bf3c))
* **scripts/license-checker:** use `console.error()` to log failures ([89c9397](https://github.com/Fdawgs/node-unrtf/commit/89c93978a8f41e9ed3fad560e49192fdb1c94ff3))
* **test-resources:** use dash over camelcase for naming files ([5dfee8e](https://github.com/Fdawgs/node-unrtf/commit/5dfee8e2925ec73eeae13b06a512e491ac9a0229))
* **tsconfig:** sort options ([70990c8](https://github.com/Fdawgs/node-unrtf/commit/70990c8702cf3a4aa29795b014dbebe483340113))
* update import order ([07df94c](https://github.com/Fdawgs/node-unrtf/commit/07df94cdaa8567c5cdf50fa919ed29628c3ffc43))
* use jsdoc syntax for arrays over interfaces ([302d17c](https://github.com/Fdawgs/node-unrtf/commit/302d17c10fcefb43a878f28ab812415155a04f22))
* use jsdoc syntax for opt params over google closure syntax ([92e4068](https://github.com/Fdawgs/node-unrtf/commit/92e406833a7ed35a2b2559269c6cbeebe1428dc5))


### Continuous integration

* **ci:** error on new jest snapshot ([370addc](https://github.com/Fdawgs/node-unrtf/commit/370addcc91818739b3090da8b842cbd2dd8227f1))
* **ci:** revert jest snapshot cli arg addition ([3cb32b7](https://github.com/Fdawgs/node-unrtf/commit/3cb32b72d7d8f774a85da73b7772bc875e316095))
* **deps:** bump coverallsapp/github-action from 2.2.0 to 2.2.1 ([#306](https://github.com/Fdawgs/node-unrtf/issues/306)) ([970e9f2](https://github.com/Fdawgs/node-unrtf/commit/970e9f2129af3d92361b470ba5cc3763a138433e))


### Improvements

* deconstruct imports ([dbe1051](https://github.com/Fdawgs/node-unrtf/commit/dbe10513c48a52f5cfb0262acc5db7fc5f86f6e5))

## [3.1.6](https://github.com/Fdawgs/node-unrtf/compare/v3.1.5...v3.1.6) (2023-07-08)


### Improvements

* **index:** add strict `u` flag to all regex patterns ([e53e956](https://github.com/Fdawgs/node-unrtf/commit/e53e956e77a948df085e6b239a57ac8306c700d7))
* **index:** remove useless `i` regex flag ([34d2df3](https://github.com/Fdawgs/node-unrtf/commit/34d2df3dc55b68bcc7d28add9a49865fecac761e))


### Miscellaneous

* **.eslintrc:** sort `extends` array ([d679587](https://github.com/Fdawgs/node-unrtf/commit/d67958794edf398c134364d432f6f0c4be0932ef))


### Dependencies

* **deps-dev:** add eslint-plugin-regexp ([4616c07](https://github.com/Fdawgs/node-unrtf/commit/4616c077fe31d8d5387279ac99d1433757fa048e))
* **deps-dev:** bump dev dependencies ([0080245](https://github.com/Fdawgs/node-unrtf/commit/00802457bd7abc5e4b85c0ef337244769a4c5ae1))


### Bug fixes

* add missing strict mode directives ([#300](https://github.com/Fdawgs/node-unrtf/issues/300)) ([f3aa8ac](https://github.com/Fdawgs/node-unrtf/commit/f3aa8ac6d8f49b8a5398a43b61cdfd9152daf5aa))
* **index:** escape regexp quantifier characters ([fbb7fa5](https://github.com/Fdawgs/node-unrtf/commit/fbb7fa5ca8efd86be701bcd4ad47661ec11139af))

## [3.1.5](https://github.com/Fdawgs/node-unrtf/compare/v3.1.4...v3.1.5) (2023-06-24)


### Continuous integration

* **deps:** bump coverallsapp/github-action from 2.1.2 to 2.2.0 ([#294](https://github.com/Fdawgs/node-unrtf/issues/294)) ([b717f52](https://github.com/Fdawgs/node-unrtf/commit/b717f52297057acb9469f53a8a5dfcecc4eda326))


### Miscellaneous

* **.eslintrc:** enable additional jest plugin rules ([7146e71](https://github.com/Fdawgs/node-unrtf/commit/7146e7198b489a2aa506e10dedf33f4564912ddd))
* **.eslintrc:** enable additional jsdoc plugin rules ([f19811d](https://github.com/Fdawgs/node-unrtf/commit/f19811df96c1aea0166cb2f2503195cd95d28bcf))
* **.eslintrc:** only use jest plugin to lint test-related files ([96b981a](https://github.com/Fdawgs/node-unrtf/commit/96b981a7bad6b361adad30a36b2864b38a792b51))
* **.eslintrc:** update ecmascript version ([fc4ab0b](https://github.com/Fdawgs/node-unrtf/commit/fc4ab0b1db130c357b0aa00815256c714de41172))
* **package:** remove global jest mock config values ([#291](https://github.com/Fdawgs/node-unrtf/issues/291)) ([9331a40](https://github.com/Fdawgs/node-unrtf/commit/9331a4030fcb84c386b8c94813ce3b129d69c473))
* **package:** set jest coverage threshold ([42bc695](https://github.com/Fdawgs/node-unrtf/commit/42bc6951ae3c375994404948883edef2a7452ca5))


### Dependencies

* **deps-dev:** bump dev dependencies ([f2ad989](https://github.com/Fdawgs/node-unrtf/commit/f2ad989cb9409eeaba1c797f408a05a3224cb9bb))
* **deps:** bump semver from 7.5.1 to 7.5.3 ([b4455f2](https://github.com/Fdawgs/node-unrtf/commit/b4455f20d96fe06d0c15ccfe86b6281aafb5b533))

## [3.1.4](https://github.com/Fdawgs/node-unrtf/compare/v3.1.3...v3.1.4) (2023-06-02)


### Miscellaneous

* fix inline comment style ([9e04b13](https://github.com/Fdawgs/node-unrtf/commit/9e04b131b5cfaacceeb91790200d3b1e8e824941))
* use nouns for leading word in function description tags ([#285](https://github.com/Fdawgs/node-unrtf/issues/285)) ([354a2a8](https://github.com/Fdawgs/node-unrtf/commit/354a2a8a02a18cfadbd1ec525d951944c9c8ab61))


### Dependencies

* **deps-dev:** bump dev dependencies ([#288](https://github.com/Fdawgs/node-unrtf/issues/288)) ([85c9570](https://github.com/Fdawgs/node-unrtf/commit/85c9570f4a251d63908fc01ade32773f17ee477e))
* **deps-dev:** bump eslint-plugin-jsdoc from 44.2.7 to 46.1.0 ([#289](https://github.com/Fdawgs/node-unrtf/issues/289)) ([bce0174](https://github.com/Fdawgs/node-unrtf/commit/bce01742615ad280ce3bb1245b42160b69fc2b1d))


### Bug fixes

* **index:** return types don't support promise rejection values ([#290](https://github.com/Fdawgs/node-unrtf/issues/290)) ([79746ec](https://github.com/Fdawgs/node-unrtf/commit/79746ec62fea909ba2eae7f7789caf5889374a2a))

## [3.1.3](https://github.com/Fdawgs/node-unrtf/compare/v3.1.2...v3.1.3) (2023-05-13)


### Miscellaneous

* **index:** state default output if no `output*` options passed ([639fcda](https://github.com/Fdawgs/node-unrtf/commit/639fcda136ffb3e3cec8e88c6cb6e47304361a16))
* **scripts/license-checker:** resolve eslint jsdoc warning ([#279](https://github.com/Fdawgs/node-unrtf/issues/279)) ([ed2b694](https://github.com/Fdawgs/node-unrtf/commit/ed2b69451f98222b3c414371cc275915af683a12))


### Bug fixes

* **index:** do not pass false boolean options to binary ([44fddd2](https://github.com/Fdawgs/node-unrtf/commit/44fddd282e57df34ad109a63bd2bbe93af905ba3))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 43.2.0 to 44.2.3 ([#284](https://github.com/Fdawgs/node-unrtf/issues/284)) ([96cf2e2](https://github.com/Fdawgs/node-unrtf/commit/96cf2e2adda9b0cb0fc9541a7fb7f9e165401b77))
* **deps:** bump semver from 7.3.8 to 7.5.1 ([#282](https://github.com/Fdawgs/node-unrtf/issues/282)) ([784d186](https://github.com/Fdawgs/node-unrtf/commit/784d18653a33927fb1795e609acea3b8c887d008))

## [3.1.2](https://github.com/Fdawgs/node-unrtf/compare/v3.1.1...v3.1.2) (2023-04-24)


### Miscellaneous

* **.prettierrc:** enable `arrowParens` option ([#274](https://github.com/Fdawgs/node-unrtf/issues/274)) ([93598f6](https://github.com/Fdawgs/node-unrtf/commit/93598f60a7e101ab5d3512f808839d677356cf9d))
* **index:** remove redundant eslint comments ([#271](https://github.com/Fdawgs/node-unrtf/issues/271)) ([095cb26](https://github.com/Fdawgs/node-unrtf/commit/095cb26332711e0fd491f61e95ed9e62c935b278))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 40.3.0 to 43.0.7 ([#276](https://github.com/Fdawgs/node-unrtf/issues/276)) ([4d6224a](https://github.com/Fdawgs/node-unrtf/commit/4d6224ae95208d8ba4aa6cb8f0c984f6780393bd))


### Continuous integration

* **cd:** publish to npm with provenance ([#278](https://github.com/Fdawgs/node-unrtf/issues/278)) ([88ff6d0](https://github.com/Fdawgs/node-unrtf/commit/88ff6d040716654ea64597768fa9f4749d3ea0aa))
* **ci:** add node 20 to test matrix ([#277](https://github.com/Fdawgs/node-unrtf/issues/277)) ([7df7c7b](https://github.com/Fdawgs/node-unrtf/commit/7df7c7b3e5d40e983f8041eb3f62928f0adc6bce))
* **deps:** bump coverallsapp/github-action from 2.0.0 to 2.1.2 ([#275](https://github.com/Fdawgs/node-unrtf/issues/275)) ([caad54e](https://github.com/Fdawgs/node-unrtf/commit/caad54ea654fda7002a62e84fc0bb29bfe14d26e))

## [3.1.1](https://github.com/Fdawgs/node-unrtf/compare/v3.1.0...v3.1.1) (2023-03-31)


### Miscellaneous

* ignore bun lockfile ([#258](https://github.com/Fdawgs/node-unrtf/issues/258)) ([414bb45](https://github.com/Fdawgs/node-unrtf/commit/414bb45720248f6e875cbf62ed05441b6b9f063a))
* **index:** remove redundant `async` keywords ([#262](https://github.com/Fdawgs/node-unrtf/issues/262)) ([d4e0ac0](https://github.com/Fdawgs/node-unrtf/commit/d4e0ac0a71639344977a9febb6aa5e512b75ed16))
* **package:** add funding url ([a7e5ee7](https://github.com/Fdawgs/node-unrtf/commit/a7e5ee79d28639299df91cb27f60c30d9c484ad0))
* **scripts:** add eslint rule file ([c02487f](https://github.com/Fdawgs/node-unrtf/commit/c02487f550707dc7822ba4c3b096d3bd4d269c00))
* **scripts:** remove redundant export ([931c586](https://github.com/Fdawgs/node-unrtf/commit/931c586e8a4e96ee7bf74edf674dc3f72b8cf777))
* **scripts:** use js script to check licenses ([#260](https://github.com/Fdawgs/node-unrtf/issues/260)) ([3f69505](https://github.com/Fdawgs/node-unrtf/commit/3f6950551c19f12b9ad55b2abf597ceb88b63085))


### Documentation

* **contributing:** add link to conventional config ([#265](https://github.com/Fdawgs/node-unrtf/issues/265)) ([73a8fb8](https://github.com/Fdawgs/node-unrtf/commit/73a8fb808cc0d8b1558dc08ac4768b055657e419))


### Continuous integration

* **dependabot:** change commit message prefix for gh actions to `ci` ([#264](https://github.com/Fdawgs/node-unrtf/issues/264)) ([23b4631](https://github.com/Fdawgs/node-unrtf/commit/23b4631338a0eee48a05bb3ecdec2c40063dcbb0))
* **dependabot:** ignore esm major versions ([#263](https://github.com/Fdawgs/node-unrtf/issues/263)) ([0e12e21](https://github.com/Fdawgs/node-unrtf/commit/0e12e216bb6a221661cf5bb26fa0b8bac7bc8edb))
* **deps:** bump coverallsapp/github-action from 1.2.4 to 2.0.0 ([#266](https://github.com/Fdawgs/node-unrtf/issues/266)) ([4c4c7ee](https://github.com/Fdawgs/node-unrtf/commit/4c4c7ee93912d64ce5d59822ad61360c961743ba))


### Improvements

* **index:** remove blocking `fs.existsSync()` call ([#261](https://github.com/Fdawgs/node-unrtf/issues/261)) ([2c3efd9](https://github.com/Fdawgs/node-unrtf/commit/2c3efd926f07335d801783515501fb2bd35dfd06))
* **index:** remove redundant multi line regex flag ([#269](https://github.com/Fdawgs/node-unrtf/issues/269)) ([b8b6fa2](https://github.com/Fdawgs/node-unrtf/commit/b8b6fa262bd0e0a9e416313f38aaf522a37d8630))


### Dependencies

* **deps-dev:** bump dev dependencies ([9a967fa](https://github.com/Fdawgs/node-unrtf/commit/9a967fafc36f5f230c5c9bd85d27f25f6257ece8))
* **deps-dev:** bump typescript from 4.9.5 to 5.0.2 ([#267](https://github.com/Fdawgs/node-unrtf/issues/267)) ([4679b8e](https://github.com/Fdawgs/node-unrtf/commit/4679b8e4f0c1cd59aacba699c503813dd91aceb2))
* **deps:** bump coverallsapp/github-action from 1.1.3 to 1.2.3 ([#256](https://github.com/Fdawgs/node-unrtf/issues/256)) ([3fbf0d4](https://github.com/Fdawgs/node-unrtf/commit/3fbf0d4382b7bed00ae2401a356dda52ae7ea8bc))
* **deps:** bump coverallsapp/github-action from 1.2.3 to 1.2.4 ([#257](https://github.com/Fdawgs/node-unrtf/issues/257)) ([1a5ff13](https://github.com/Fdawgs/node-unrtf/commit/1a5ff13cfdc794a25f93a1d4056626d0246bac92))

## [3.1.0](https://github.com/Fdawgs/node-unrtf/compare/v3.0.6...v3.1.0) (2023-02-20)


### Features

* add nodenext compatibility ([#252](https://github.com/Fdawgs/node-unrtf/issues/252)) ([0476264](https://github.com/Fdawgs/node-unrtf/commit/047626450a3f8dbef6a37bd6c55a2f23c949b2db))


### Documentation

* **api:** remove `parseOptions()` private method ([#253](https://github.com/Fdawgs/node-unrtf/issues/253)) ([6412a92](https://github.com/Fdawgs/node-unrtf/commit/6412a92e1ea7af08a1c631cd4676590f6eda38aa))


### Miscellaneous

* **index:** remove jsdoc type from `parseOptions()` ([a19a76e](https://github.com/Fdawgs/node-unrtf/commit/a19a76e2472034cee9034158ee3922c1b0797b8f))


### Improvements

* **index:** do not return empty error message on rejection ([88c92c5](https://github.com/Fdawgs/node-unrtf/commit/88c92c510a4f535341c8dd0117387cc1ff2c6fbf))

## [3.0.6](https://github.com/Fdawgs/node-unrtf/compare/v3.0.5...v3.0.6) (2023-02-13)


### Documentation

* **readme:** rename intro to overview ([9145985](https://github.com/Fdawgs/node-unrtf/commit/9145985e298a989e0c9f9320318d786744a87370))


### Continuous integration

* **cd:** use sentence case for changelog headings ([49b64e2](https://github.com/Fdawgs/node-unrtf/commit/49b64e2c2f1be1ca710e4e854b9b3a0c7d3bd018))


### Dependencies

* **deps-dev:** bump dev dependencies ([283b042](https://github.com/Fdawgs/node-unrtf/commit/283b042e13f6aab60d43165ddc87976b47390db0))


### Miscellaneous

* rename master branch to main ([#250](https://github.com/Fdawgs/node-unrtf/issues/250)) ([1de78ad](https://github.com/Fdawgs/node-unrtf/commit/1de78ad253690d827bf56a963f34f2ea63d09eb7))
* use sentence case over ap style for titles and headings ([eef9ac5](https://github.com/Fdawgs/node-unrtf/commit/eef9ac5b56b2e25d828b031a8cd35b0f23a3f76b))

## [3.0.5](https://github.com/Fdawgs/node-unrtf/compare/v3.0.4...v3.0.5) (2023-01-31)


### Miscellaneous

* **package:** remove `doc` script ([#245](https://github.com/Fdawgs/node-unrtf/issues/245)) ([6d9e929](https://github.com/Fdawgs/node-unrtf/commit/6d9e929965d1763e1ef1046511c80779c2156936))


### Documentation

* **readme:** add note re windows binary ([1032a12](https://github.com/Fdawgs/node-unrtf/commit/1032a1228206fc3208c7cd755d439229ecbacd70))
* **readme:** fix linux path example ([#242](https://github.com/Fdawgs/node-unrtf/issues/242)) ([4210dfd](https://github.com/Fdawgs/node-unrtf/commit/4210dfd8b0f15652adf48c77a32f7f2210b62bb5))
* **readme:** remove fluff ([9f7240b](https://github.com/Fdawgs/node-unrtf/commit/9f7240b5bc10d20af4d030e8456702f25ddba435))


### Dependencies

* **deps-dev:** bump dev dependencies ([860a394](https://github.com/Fdawgs/node-unrtf/commit/860a394b042da4ac83813fb5146c8e4739fee4b0))
* **deps:** replace file-type with native functionality ([148ee6e](https://github.com/Fdawgs/node-unrtf/commit/148ee6e40725553f5d2f0e010c65168afb2deccd))

## [3.0.4](https://github.com/Fdawgs/node-unrtf/compare/v3.0.3...v3.0.4) (2023-01-13)


### Miscellaneous

* **license:** update license year ([e77850e](https://github.com/Fdawgs/node-unrtf/commit/e77850e1039f71dec8683748187d850f8364c3cf))


### Documentation

* **contributing:** update min node version ([d0b3ef7](https://github.com/Fdawgs/node-unrtf/commit/d0b3ef7d10e00c32f1cf2e8483c052d8439cb5b9))
* grammar and clarity fixes ([ce7a89f](https://github.com/Fdawgs/node-unrtf/commit/ce7a89f4999abb326ab33b1fa16d358519fee0ee))


### Dependencies

* **deps-dev:** bump dev dependencies ([e81d337](https://github.com/Fdawgs/node-unrtf/commit/e81d33758051d0aa36d9f112d7e4996a38555864))
* **deps-dev:** bump jsdoc-to-markdown from 7.1.1 to 8.0.0 ([#238](https://github.com/Fdawgs/node-unrtf/issues/238)) ([e8eeced](https://github.com/Fdawgs/node-unrtf/commit/e8eeced4672e7928de0eaaf2c97857e203f240ee))
* **deps:** bump actions/dependency-review-action from 2 to 3 ([#237](https://github.com/Fdawgs/node-unrtf/issues/237)) ([3616a3f](https://github.com/Fdawgs/node-unrtf/commit/3616a3fcb5ac0789fd328891760f87ecc1c35dc3))


### Improvements

* **index:** convert `parseOptions()` internal func to sync ([39d24e2](https://github.com/Fdawgs/node-unrtf/commit/39d24e24944a3a0f87aab71364d19e63ee500d85))
* **index:** remove catch rethrowing errors ([#241](https://github.com/Fdawgs/node-unrtf/issues/241)) ([907902f](https://github.com/Fdawgs/node-unrtf/commit/907902fcd9e93be22be2f4c906aa8cd3f612a24f))

## [3.0.3](https://github.com/Fdawgs/node-unrtf/compare/v3.0.2...v3.0.3) (2022-10-25)


### Continuous integration

* **cd:** fix typescript def gen ([931b986](https://github.com/Fdawgs/node-unrtf/commit/931b986531cc4cc72e5c8b9e08f6a1e397ed7303))

## [3.0.2](https://github.com/Fdawgs/node-unrtf/compare/v3.0.1...v3.0.2) (2022-10-25)


### Miscellaneous

* **lib/win32:** compress binaries ([#233](https://github.com/Fdawgs/node-unrtf/issues/233)) ([caf7794](https://github.com/Fdawgs/node-unrtf/commit/caf77941a37c591e4db6005610584c800c75bd66))


### Continuous integration

* **cd:** gen typescript definitions before publishing ([21e0b85](https://github.com/Fdawgs/node-unrtf/commit/21e0b8514fb10abbb4a875fccf1f92a7e178db50))
* **cd:** remove dev values from `package.json` ([49a022d](https://github.com/Fdawgs/node-unrtf/commit/49a022d6f30843431c85a412e5080e88047ab23f))


### Dependencies

* **deps-dev:** bump dev dependencies ([8cd7042](https://github.com/Fdawgs/node-unrtf/commit/8cd7042dda9f23579c84aea090761352c1e8855a))
* **deps:** bump semver from 7.3.7 to 7.3.8 ([bdf759c](https://github.com/Fdawgs/node-unrtf/commit/bdf759cec1fe73430ba36be690e2a0e6c96e3bf3))

## [3.0.1](https://github.com/Fdawgs/node-unrtf/compare/v3.0.0...v3.0.1) (2022-10-03)


### Documentation

* **readme:** remove redundant statement ([58f2f60](https://github.com/Fdawgs/node-unrtf/commit/58f2f6008c106c75a885731f8adbaf72a82049eb))
* use shorter urls; remove yarn install guidance ([be81d59](https://github.com/Fdawgs/node-unrtf/commit/be81d59d7dba344962cd55c7b579f07f0f7d0da4))


### Miscellaneous

* **.husky:** shell path and arg updates ([#224](https://github.com/Fdawgs/node-unrtf/issues/224)) ([9fd65dd](https://github.com/Fdawgs/node-unrtf/commit/9fd65dd4b531bb271eb65c4c3cabef32348b949e))
* **.npmignore:** reduce entries ([c3dd237](https://github.com/Fdawgs/node-unrtf/commit/c3dd237d9dcca9ca20097b511d4912a08b971568))
* **.vscode/extensions:** remove unmaintained extension ([a6d6f49](https://github.com/Fdawgs/node-unrtf/commit/a6d6f49381f1cf53240cd1dffc2cbde0d5a05eb7))
* ***.ignore:** add clinicjs directory ([8ee7d00](https://github.com/Fdawgs/node-unrtf/commit/8ee7d0052b5c675cbbac02d451e4cb512dfd0903))
* import destructuring ([#230](https://github.com/Fdawgs/node-unrtf/issues/230)) ([80e4748](https://github.com/Fdawgs/node-unrtf/commit/80e4748453783e0ba63e9b0bf662576bbc52f22d))
* **LICENSE:** remove trailing whitespace ([ca8cb7d](https://github.com/Fdawgs/node-unrtf/commit/ca8cb7daabde1a24bae43d659e3a3290574026c5))
* prefer object destructuring ([#232](https://github.com/Fdawgs/node-unrtf/issues/232)) ([abaa7dd](https://github.com/Fdawgs/node-unrtf/commit/abaa7ddf848ad4ddf250eedc5b4f1a211c26a143))


### Dependencies

* **deps-dev:** bump dev dependencies ([c0b587b](https://github.com/Fdawgs/node-unrtf/commit/c0b587b1d08ed8d926787cc5a45ffc7803085e58))
* **deps-dev:** bump eslint-plugin-jest from 26.9.0 to 27.0.1 ([#226](https://github.com/Fdawgs/node-unrtf/issues/226)) ([f7e67b6](https://github.com/Fdawgs/node-unrtf/commit/f7e67b6e23aa9513015d1ab5ac7214b3a98be652))
* **deps-dev:** bump jest from 28.1.3 to 29.0.1 ([#227](https://github.com/Fdawgs/node-unrtf/issues/227)) ([c1cffa3](https://github.com/Fdawgs/node-unrtf/commit/c1cffa3eccad74d180e87a2a9f4f9ee9da1f41b3))

## [3.0.0](https://github.com/Fdawgs/node-unrtf/compare/v2.0.9...v3.0.0) (2022-08-09)


### ⚠ BREAKING CHANGES

* drop support for EOL node 12

### Miscellaneous

* **.gitignore:** use latest github ignore template ([cbf460d](https://github.com/Fdawgs/node-unrtf/commit/cbf460de48ec3211db61947271c78d849fcce140))
* **.npmrc:** disable package-lock generation ([#219](https://github.com/Fdawgs/node-unrtf/issues/219)) ([fadab12](https://github.com/Fdawgs/node-unrtf/commit/fadab12b20aafc1c412e6200e43c5f44ab84ab42))
* **.prettierignore:** add new paths from `.gitignore` ([999cb48](https://github.com/Fdawgs/node-unrtf/commit/999cb48645d2a0b274abcf92c76204dd04b73259))
* drop support for node 12 ([#222](https://github.com/Fdawgs/node-unrtf/issues/222)) ([f8289a2](https://github.com/Fdawgs/node-unrtf/commit/f8289a20e9a0e335da76de2f7c01c10daf6f25a9))
* ignore pnpm lock file ([e7d4d64](https://github.com/Fdawgs/node-unrtf/commit/e7d4d646725563d0c5de6c9c408aa93bc781ac6e))


### Dependencies

* **.npmignore:** add documentation; reduce package size by ~33.2% ([#220](https://github.com/Fdawgs/node-unrtf/issues/220)) ([3b9f772](https://github.com/Fdawgs/node-unrtf/commit/3b9f772b78706dc7a2eeec84a27f1512e3df3f0b))
* **dependabot:** increase `open-pull-requests-limit` from 5 to 20 ([1de18cb](https://github.com/Fdawgs/node-unrtf/commit/1de18cbf8f799161e4280551806bc7ec37465bf2))
* **deps:** bump actions/dependency-review-action from 1 to 2 ([#217](https://github.com/Fdawgs/node-unrtf/issues/217)) ([6d06a02](https://github.com/Fdawgs/node-unrtf/commit/6d06a026fb70f4cf61cf501581ba09861182e9b6))
* **deps:** bump dependencies ([#223](https://github.com/Fdawgs/node-unrtf/issues/223)) ([4af18b4](https://github.com/Fdawgs/node-unrtf/commit/4af18b4201bd97d5cf4c6f11b44f4b04fa50aac3))
* **deps:** bump wagoid/commitlint-github-action from 4 to 5 ([#216](https://github.com/Fdawgs/node-unrtf/issues/216)) ([58679bf](https://github.com/Fdawgs/node-unrtf/commit/58679bf90c46bf33ae2ff6e8f4eb6659f1c45d00))

## [2.0.9](https://github.com/Fdawgs/node-unrtf/compare/v2.0.8...v2.0.9) (2022-06-04)


### Miscellaneous

* **.github/funding:** remove unused keys ([c76b454](https://github.com/Fdawgs/node-unrtf/commit/c76b4541aadf902a9728780f698a657903c37990))
* **.github:** add `FUNDING.yml` ([5f0d22f](https://github.com/Fdawgs/node-unrtf/commit/5f0d22f019b1a6573caccce89aff96a6f3b57eb1))


### Dependencies

* **.npmignore:** ignore `tsconfig.json` ([1539079](https://github.com/Fdawgs/node-unrtf/commit/15390799f7c8db2f50e3572fc3f6e3e36d32679c))
* **.npmignore:** ignore support files; reduce package size by ~73% ([01f9e6f](https://github.com/Fdawgs/node-unrtf/commit/01f9e6f741ae7bfafb72714a0366a96a98197a16))

### [2.0.8](https://github.com/Fdawgs/node-unrtf/compare/v2.0.7...v2.0.8) (2022-06-01)


### Documentation

* improve readability ([7636248](https://github.com/Fdawgs/node-unrtf/commit/763624809a239645629490ed43001c15a71670db))
* **readme:** fix broken link ([96cb17c](https://github.com/Fdawgs/node-unrtf/commit/96cb17cd298324d142036ddad0a81ef00b05d393))
* **readme:** remove snyk badge ([dd5dfae](https://github.com/Fdawgs/node-unrtf/commit/dd5dfae1cb655d7b2d248f2588797051c0875c77))


### Miscellaneous

* **.eslintrc:** enable `plugin:jest/style` rules ([#200](https://github.com/Fdawgs/node-unrtf/issues/200)) ([b1af9ca](https://github.com/Fdawgs/node-unrtf/commit/b1af9ca72830f28ef57e08833be543910a5cd401))
* **.github/codeql-config:** remove quotation marks ([7062f47](https://github.com/Fdawgs/node-unrtf/commit/7062f474a6c7869dc750beef72c9af9c5299d012))
* **bug_report:** use node 18 as placeholder for `node-version` ([39eb3b6](https://github.com/Fdawgs/node-unrtf/commit/39eb3b6649ee772348dacdc84bffe7774d08d090))
* **ci:** remove quotation marks from step name ([03554a3](https://github.com/Fdawgs/node-unrtf/commit/03554a396b0e2a63399953eae621ef43ebe46fc7))
* **index:** update constructor jsdoc param tag ([#189](https://github.com/Fdawgs/node-unrtf/issues/189)) ([3abc92a](https://github.com/Fdawgs/node-unrtf/commit/3abc92afa14965563ea818cdeef7b5cb8cfb6eec))
* **scripts:** remove redundant gitkraken fix from prepare script ([758bce0](https://github.com/Fdawgs/node-unrtf/commit/758bce0d8cece49b857a16c0ef71bc5ab01a3594))
* **scripts:** use shorter arg aliases; remove debugging args from jest ([eb83f38](https://github.com/Fdawgs/node-unrtf/commit/eb83f38d8366154fa61d638cce40ad50f5d1c38e))
* use npm install alias ([26e9fdd](https://github.com/Fdawgs/node-unrtf/commit/26e9fdd57ff11b8ef7d7c483bd37656ae2798d79))


### Continuous integration

* add dependency-review job ([0c42629](https://github.com/Fdawgs/node-unrtf/commit/0c42629c2a24388eaa0fac979d61f60242a5733c))
* add job step names, workflow comments, and whitespace ([10d24d8](https://github.com/Fdawgs/node-unrtf/commit/10d24d85c5b766016ac51e89763ebc759752694b))
* **automerge:** fix context ([ba623e0](https://github.com/Fdawgs/node-unrtf/commit/ba623e04aea16b21c0a5f9cb94e72ea30a5a6549))
* **automerge:** squash automerge prs ([#190](https://github.com/Fdawgs/node-unrtf/issues/190)) ([7afcfb8](https://github.com/Fdawgs/node-unrtf/commit/7afcfb8a70be64032034fc45d41757ace426df12))
* **cd:** update org name for release-please-action ([a640ab2](https://github.com/Fdawgs/node-unrtf/commit/a640ab2574b3166e8aeccf3229662b95003b54b5))
* **cd:** use `lts/*` for node setup in release job ([ab4d5ff](https://github.com/Fdawgs/node-unrtf/commit/ab4d5ff9c96b728a32cca3ba352c30f6efb7f326))
* check `user.login` is dependabot instead of `actor` ([#202](https://github.com/Fdawgs/node-unrtf/issues/202)) ([9178aec](https://github.com/Fdawgs/node-unrtf/commit/9178aecc1a270999d6152aca7abc3c25c74e622b))
* **ci:** add node 18 to test matrix ([#201](https://github.com/Fdawgs/node-unrtf/issues/201)) ([870d7d7](https://github.com/Fdawgs/node-unrtf/commit/870d7d70015ed1d031502171119f0a01af1e10e4))
* **ci:** require `unit-tests` job to pass for `save-pr-number` job to run ([438652b](https://github.com/Fdawgs/node-unrtf/commit/438652bbb16004e4058086ae6aa9e9feb2558ae7))
* **ci:** use `lts/*` for node setup in lint job ([98cb0c3](https://github.com/Fdawgs/node-unrtf/commit/98cb0c322dc286a719b24e0b158163140f68fb42))
* **ci:** use `node-version` for node matrix key ([b3e4bdc](https://github.com/Fdawgs/node-unrtf/commit/b3e4bdc9006fcd95527867cf6d84b4bab3b1226a))
* **codeql-analysis:** remove unused autobuild step ([5913103](https://github.com/Fdawgs/node-unrtf/commit/591310349544fbeff674bcaa78a8f57a5e05e94c))
* **codeql:** grant minimum permissions to run; rename file ([#186](https://github.com/Fdawgs/node-unrtf/issues/186)) ([47379f6](https://github.com/Fdawgs/node-unrtf/commit/47379f660d5764d7341b7ed3247da2876003c932))
* **codeql:** only run on pr changes to `.html`, `.js`, and `.yml` files ([09733fb](https://github.com/Fdawgs/node-unrtf/commit/09733fbe0dccd0f4c17dc085be40792f7525c62a))
* **codeql:** resolve missing analyses ([5fbd4b6](https://github.com/Fdawgs/node-unrtf/commit/5fbd4b608e4fdec73c35646b5298fa350ccb0a8d))
* **codeql:** specify which files to scan during analysis ([c4a7a0f](https://github.com/Fdawgs/node-unrtf/commit/c4a7a0feea2c76870974067f4e6bb4bb6e901d6f))
* **link-check:** fix skip regex ([48da5ac](https://github.com/Fdawgs/node-unrtf/commit/48da5ac7f3f932fabc0075db022640029ef19b64))
* **link-check:** replace `npx linkinator` call with github action ([983c25e](https://github.com/Fdawgs/node-unrtf/commit/983c25e8923fb2df4241eb8c16c72b1f00394acb))
* only save pr number artifact for dependabot ([d66ce1c](https://github.com/Fdawgs/node-unrtf/commit/d66ce1cb7ce65a81ed729588f9f9eb415f2bb60a))
* only trigger dependency-review on pr ([6347c11](https://github.com/Fdawgs/node-unrtf/commit/6347c11d15cd581f532a24620558af0cd22ed31f))
* reduce workflow permissions to minimum ([bb640f2](https://github.com/Fdawgs/node-unrtf/commit/bb640f2c4e9c4065ea321d6cd0c30beb0fef23ad))
* remove git credentials after checkout ([#205](https://github.com/Fdawgs/node-unrtf/issues/205)) ([c4c4751](https://github.com/Fdawgs/node-unrtf/commit/c4c4751a1667d97932de31c8a321073a7ccf940d))
* replace workflow-run-cleanup-action with github concurrency ([fd31220](https://github.com/Fdawgs/node-unrtf/commit/fd312204760ab7137ff6a850ff2c7641e43eb531))


### Dependencies

* **deps-dev:** bump @commitlint/cli from 16.3.0 to 17.0.1 ([#209](https://github.com/Fdawgs/node-unrtf/issues/209)) ([e09053c](https://github.com/Fdawgs/node-unrtf/commit/e09053cc65ffd012aa055d5b8add59387b1a6ec7))
* **deps-dev:** bump @commitlint/config-conventional ([#207](https://github.com/Fdawgs/node-unrtf/issues/207)) ([aa1eee8](https://github.com/Fdawgs/node-unrtf/commit/aa1eee810ec6a50e7331d18a71047ebf1ab05603))
* **deps-dev:** bump eslint-plugin-jsdoc from 37.9.7 to 38.0.6 ([1184217](https://github.com/Fdawgs/node-unrtf/commit/1184217b7bf97e3ba41659bf56e7d9e75d3ace89))
* **deps-dev:** bump eslint-plugin-jsdoc from 38.1.6 to 39.2.9 ([#198](https://github.com/Fdawgs/node-unrtf/issues/198)) ([7bcab92](https://github.com/Fdawgs/node-unrtf/commit/7bcab92662359cd924c7f34083112a066c451b98))
* **deps-dev:** bump husky from 7.0.4 to 8.0.1 ([#208](https://github.com/Fdawgs/node-unrtf/issues/208)) ([e79ae3e](https://github.com/Fdawgs/node-unrtf/commit/e79ae3e502b9a9b47aa33eab141abdc1d2319484))
* **deps-dev:** bump jest from 27.5.1 to 28.0.3 ([#197](https://github.com/Fdawgs/node-unrtf/issues/197)) ([0684645](https://github.com/Fdawgs/node-unrtf/commit/068464568fc8205ea338788930cdced14e0cb5de))
* **deps:** bump actions/checkout from 2 to 3 ([af36dea](https://github.com/Fdawgs/node-unrtf/commit/af36dea71e3471d171ef3c9e0197d48d61e539fe))
* **deps:** bump actions/upload-artifact from 2 to 3 ([#196](https://github.com/Fdawgs/node-unrtf/issues/196)) ([0a365b3](https://github.com/Fdawgs/node-unrtf/commit/0a365b3a18af6c8afc07b8f13fbb91a5c41216ae))
* **deps:** bump github/codeql-action from 1 to 2 ([#195](https://github.com/Fdawgs/node-unrtf/issues/195)) ([96392b2](https://github.com/Fdawgs/node-unrtf/commit/96392b2393b7c3977c67d07d4246e80d8012459b))
* **deps:** bump minor and hotfix versions ([#210](https://github.com/Fdawgs/node-unrtf/issues/210)) ([fd18299](https://github.com/Fdawgs/node-unrtf/commit/fd18299dd64ce80186e76c27c112a0a874762817))

### [2.0.7](https://github.com/Fdawgs/node-unrtf/compare/v2.0.6...v2.0.7) (2022-02-25)


### Bug fixes

* **index:** use `spawn` for larger stream results ([#181](https://github.com/Fdawgs/node-unrtf/issues/181)) ([14515f2](https://github.com/Fdawgs/node-unrtf/commit/14515f25b9504c69ef5261bf299b8226bd880504))


### Documentation

* **contributing:** add mention of husky pre-commit hook ([4a006fd](https://github.com/Fdawgs/node-unrtf/commit/4a006fdaf8d3b600bf12f89523fd0e3c702d3c08))
* **contributing:** add step for `lint:licenses` script ([#166](https://github.com/Fdawgs/node-unrtf/issues/166)) ([54a54f5](https://github.com/Fdawgs/node-unrtf/commit/54a54f5ac644a2bcbecfe387ad3e14bd7982a02b))
* **readme:** add windows binary known issues section ([#165](https://github.com/Fdawgs/node-unrtf/issues/165)) ([06b9b1b](https://github.com/Fdawgs/node-unrtf/commit/06b9b1bc25539f15dc9e343a1611be4603b11af3))


### Continuous integration

* remove spellcheck workflow ([#173](https://github.com/Fdawgs/node-unrtf/issues/173)) ([4c28c91](https://github.com/Fdawgs/node-unrtf/commit/4c28c91525f8c4a9ee9788242928b7f481cf9130))


### Miscellaneous

* **.github:** remove trailing whitespace ([5a9a431](https://github.com/Fdawgs/node-unrtf/commit/5a9a431277af3b8a97e11e3f0f0344aea9d177b5))
* turn off `security/detect-object-injection` eslint rule ([#162](https://github.com/Fdawgs/node-unrtf/issues/162)) ([9fde2cf](https://github.com/Fdawgs/node-unrtf/commit/9fde2cf21b2d44644da399e965a3263010bd57f7))


### Dependencies

* **dependabot:** ignore minor and patch commit-lint updates ([#175](https://github.com/Fdawgs/node-unrtf/issues/175)) ([0443af1](https://github.com/Fdawgs/node-unrtf/commit/0443af184ce821845c08e2999206db73f6d373e5))
* **dependabot:** ignore minor and patch release-please-action updates ([#164](https://github.com/Fdawgs/node-unrtf/issues/164)) ([edd4c69](https://github.com/Fdawgs/node-unrtf/commit/edd4c69bd82142c0f5b7caa1159d076c8a89fb49))
* **dependabot:** major tags no longer need ignore support ([240be7b](https://github.com/Fdawgs/node-unrtf/commit/240be7b7f47442cd8476d2813fbbacc67d04bf57))
* **dependabot:** use default open-pull-requests-limit value ([d7e2723](https://github.com/Fdawgs/node-unrtf/commit/d7e2723a6fa230a967cf5efdcbff8fc486e1e33d))
* **deps-dev:** bump @commitlint/cli from 15.0.0 to 16.0.1 ([8c86caa](https://github.com/Fdawgs/node-unrtf/commit/8c86caa9c24d1c22033f80e3ec85cd985cc1dfe5))
* **deps-dev:** bump @commitlint/config-conventional ([a7974fb](https://github.com/Fdawgs/node-unrtf/commit/a7974fb7f87b7be1af5140cc1beaaefe5da8368a))
* **deps-dev:** bump dev dependencies ([7c244dd](https://github.com/Fdawgs/node-unrtf/commit/7c244ddbdd965b1822d37e3edf4fbf5fa9ca65c1))
* **deps-dev:** bump eslint from 7.32.0 to 8.7.0 ([9c7954b](https://github.com/Fdawgs/node-unrtf/commit/9c7954b8442eb74111cd9671a8ff19a1d1361403))
* **deps-dev:** bump eslint-plugin-jest from 25.7.0 to 26.0.0 ([67fc04d](https://github.com/Fdawgs/node-unrtf/commit/67fc04d0fa45229866171684371b198823739771))
* **deps-dev:** bump eslint-plugin-promise from 5.2.0 to 6.0.0 ([9b249c3](https://github.com/Fdawgs/node-unrtf/commit/9b249c3f55a0ad5d91132e68379c3ecb52247bc0))
* **deps-dev:** bump prettier from 2.5.0 to 2.5.1 ([3fbe274](https://github.com/Fdawgs/node-unrtf/commit/3fbe274ba4abb38265e54ec92f0af6dae2b3ea3b))
* **deps:** bump actions/github-script from 5 to 6 ([f8af51e](https://github.com/Fdawgs/node-unrtf/commit/f8af51e98efd4b210a5759f7b7140fa5abce6a3c))
* **deps:** bump actions/setup-node from 2 to 3 ([ad9d0df](https://github.com/Fdawgs/node-unrtf/commit/ad9d0df262331b16453a4c901cacb19c6c1d4709))
* **deps:** bump GoogleCloudPlatform/release-please-action from 2 to 3 ([165b2ab](https://github.com/Fdawgs/node-unrtf/commit/165b2ab963b0202c08bf295808d54bfcab349fee))

### [2.0.6](https://github.com/Fdawgs/node-unrtf/compare/v2.0.5...v2.0.6) (2021-12-02)


### Bug fixes

* **index:** do not assume win32 usage for binaries ([bbd50d8](https://github.com/Fdawgs/node-unrtf/commit/bbd50d838b6dbc487233ac5cdaee0db657d64f93))


### Continuous integration

* **ci:** do not run clean-up on draft prs ([f0105cf](https://github.com/Fdawgs/node-unrtf/commit/f0105cfc185cc2c83f03e987e209bc56e9957c50))
* **spell-check:** do not run on draft prs ([f4705c2](https://github.com/Fdawgs/node-unrtf/commit/f4705c276576b3b6af550256846ebeb55e15e47b))
* trigger workflows when drafts marked as "ready to review" ([#148](https://github.com/Fdawgs/node-unrtf/issues/148)) ([4fc27d5](https://github.com/Fdawgs/node-unrtf/commit/4fc27d5c2b5dbeb33a3d7b99191ce6864c869619))


### Documentation

* **coc:** reduce verbosity ([6532486](https://github.com/Fdawgs/node-unrtf/commit/65324866d1621ce189a755422b6d89e8deee3f5b))


### Miscellaneous

* ignore `.yarnclean` ([#154](https://github.com/Fdawgs/node-unrtf/issues/154)) ([fc420c9](https://github.com/Fdawgs/node-unrtf/commit/fc420c9f53ab95838e1d2048914b66b14671eea6))
* **package/scripts:** add `lint:licenses` ([#155](https://github.com/Fdawgs/node-unrtf/issues/155)) ([3761264](https://github.com/Fdawgs/node-unrtf/commit/37612646c91e564d0d05de6fbcc5eede0563b7eb))


### Improvements

* **index:** remove unused conditional; all options are binary ([#157](https://github.com/Fdawgs/node-unrtf/issues/157)) ([d563d23](https://github.com/Fdawgs/node-unrtf/commit/d563d2308e90ef354764357acb1db992108b6a46))


### Dependencies

* **dependabot:** ignore minor and patch github-actions updates ([#149](https://github.com/Fdawgs/node-unrtf/issues/149)) ([5994571](https://github.com/Fdawgs/node-unrtf/commit/599457199c750827e865d4e8ac3dfe6260e69a90))
* **deps-dev:** bump @commitlint/cli from 14.1.0 to 15.0.0 ([1d6e73a](https://github.com/Fdawgs/node-unrtf/commit/1d6e73a432ef816ebb8db06fceadeb8eb8d7f9ed))
* **deps-dev:** bump @commitlint/config-conventional ([46b55b7](https://github.com/Fdawgs/node-unrtf/commit/46b55b75810be1f3b0e49960999833e4a0e21b50))
* **deps-dev:** bump dev dependencies ([#161](https://github.com/Fdawgs/node-unrtf/issues/161)) ([8ef1863](https://github.com/Fdawgs/node-unrtf/commit/8ef1863fe06468064f95ddf0a47fca80bd2aa8c5))
* **deps-dev:** bump eslint-config-airbnb-base from 14.2.1 to 15.0.0 ([6659063](https://github.com/Fdawgs/node-unrtf/commit/6659063c4c443ee911cd1bd5ba28d77a5074527c))
* **deps-dev:** bump prettier from 2.4.1 to 2.5.0 ([8d98289](https://github.com/Fdawgs/node-unrtf/commit/8d9828956fc61ba993790e07085c16449e95692c))
* **deps:** bump GoogleCloudPlatform/release-please-action ([21f0d71](https://github.com/Fdawgs/node-unrtf/commit/21f0d718f0e1019a8a3e8ab082adf441dace2a5f))

### [2.0.5](https://github.com/Fdawgs/node-unrtf/compare/v2.0.4...v2.0.5) (2021-11-04)


### Bug fixes

* **index:** normalize `binPath` constructor param ([#145](https://github.com/Fdawgs/node-unrtf/issues/145)) ([81e2863](https://github.com/Fdawgs/node-unrtf/commit/81e2863f48824bd0732f15f7d9a8839cb65c6de5))


### Dependencies

* **deps-dev:** bump @commitlint/cli from 13.2.1 to 14.1.0 ([a289044](https://github.com/Fdawgs/node-unrtf/commit/a2890447bc4deae1cdcfa1d3c4b4661df714666d))
* **deps-dev:** bump @commitlint/config-conventional ([c5990e5](https://github.com/Fdawgs/node-unrtf/commit/c5990e59a49553826b12b99c9fad1b968c331228))
* **deps:** bump actions/checkout from 2.3.4 to 2.3.5 ([6940cbe](https://github.com/Fdawgs/node-unrtf/commit/6940cbebe7b38972e914ed9dcec9c05c6ec1c8ef))
* **deps:** bump GoogleCloudPlatform/release-please-action ([70e5b66](https://github.com/Fdawgs/node-unrtf/commit/70e5b66be83332019eebe76cf328a7db06964752))
* **deps:** bump wagoid/commitlint-github-action from 4.1.5 to 4.1.9 ([de5ab57](https://github.com/Fdawgs/node-unrtf/commit/de5ab57915704e354c7378d535fdafe0a8a2b32e))


### Miscellaneous

* **.prettierrc:** only enable `bracketSameLine` for html ([#142](https://github.com/Fdawgs/node-unrtf/issues/142)) ([529f0e8](https://github.com/Fdawgs/node-unrtf/commit/529f0e806f75dc85e2a2692fbded343206602a70))


### Continuous integration

* **cd:** stop `prepare` script running ([#144](https://github.com/Fdawgs/node-unrtf/issues/144)) ([731aecb](https://github.com/Fdawgs/node-unrtf/commit/731aecb5cfe5425525d02b9f9bd745932230ce3e))

### [2.0.4](https://github.com/Fdawgs/node-unrtf/compare/v2.0.3...v2.0.4) (2021-10-29)


### Miscellaneous

* ignore emf and wmf test files ([#134](https://github.com/Fdawgs/node-unrtf/issues/134)) ([8d79d76](https://github.com/Fdawgs/node-unrtf/commit/8d79d76c18d95f7f2344568ed64ea54f6144f89c))

### [2.0.3](https://github.com/Fdawgs/node-unrtf/compare/v2.0.2...v2.0.3) (2021-10-29)


### Continuous integration

* **automerge:** update location of octokit rest methods ([853455e](https://github.com/Fdawgs/node-unrtf/commit/853455e704c3eadd02294bf56fb5078ee20be243))
* **ci:** revert to workflow-run-clean-action from github concurrency ([010965e](https://github.com/Fdawgs/node-unrtf/commit/010965eba01bac1414b82989ab2fe64f46b350a8))


### Miscellaneous

* **.eslintrc:** remove inaccurate sourcetype ([#128](https://github.com/Fdawgs/node-unrtf/issues/128)) ([6b9bd44](https://github.com/Fdawgs/node-unrtf/commit/6b9bd443c371322d15b0b6d3e9e8b3b1790e7b69))
* **.eslintrc:** remove redundant `impliedStrict` option ([#131](https://github.com/Fdawgs/node-unrtf/issues/131)) ([6e1d15f](https://github.com/Fdawgs/node-unrtf/commit/6e1d15fd7db2bf2657af28fb7cb682c9d942d2cd))
* **.eslintrc:** set correct ecmascript version ([#118](https://github.com/Fdawgs/node-unrtf/issues/118)) ([1e0913c](https://github.com/Fdawgs/node-unrtf/commit/1e0913cdef24a0646afb8e846be173f87e06f51e))
* **.husky/.gitignore:** remove now redundant file ([4c805bd](https://github.com/Fdawgs/node-unrtf/commit/4c805bd559d7fead2d0c0c3c30f8835cfa7d8e72))
* **.npmignore:** add `API.md` ([#120](https://github.com/Fdawgs/node-unrtf/issues/120)) ([acf9589](https://github.com/Fdawgs/node-unrtf/commit/acf9589ed9f69b9f7d92ca67bca47a1e761a4695))
* **.prettierrc:** enable `bracketsameline` option ([bfde76d](https://github.com/Fdawgs/node-unrtf/commit/bfde76d73033cba002f73267502c16cb74067476))
* **.prettierrc:** override defaults for html, css, and scss files ([#119](https://github.com/Fdawgs/node-unrtf/issues/119)) ([c3cc50e](https://github.com/Fdawgs/node-unrtf/commit/c3cc50ede74380f91e0ea155da603850ab4778ea))
* **.vscode:** add `mhutchie.git-graph` extension ([e4fa7e4](https://github.com/Fdawgs/node-unrtf/commit/e4fa7e41f6be4c5ef67ac8a8ece972c3ca63e140))
* **.vscode:** remove deprecated settings ([#129](https://github.com/Fdawgs/node-unrtf/issues/129)) ([a09bb79](https://github.com/Fdawgs/node-unrtf/commit/a09bb79eb70bb7a802eb229368bed6168fff5be4))
* disable irrelevant eslint rules ([#130](https://github.com/Fdawgs/node-unrtf/issues/130)) ([1542272](https://github.com/Fdawgs/node-unrtf/commit/1542272da90e43d036ee809e20ea6a40b9536a42))


### Documentation

* bump coc from v2.0.0 to v2.1.0 ([#132](https://github.com/Fdawgs/node-unrtf/issues/132)) ([c7bb201](https://github.com/Fdawgs/node-unrtf/commit/c7bb201cd1b1ebdb0f33176a1941c52588cea784))


### Dependencies

* **deps-dev:** add eslint-plugin-security-node ([#121](https://github.com/Fdawgs/node-unrtf/issues/121)) ([71ed617](https://github.com/Fdawgs/node-unrtf/commit/71ed61710b6924cb22a14386b871d6a717392f33))
* **deps-dev:** bump dev dependencies ([9fe5ece](https://github.com/Fdawgs/node-unrtf/commit/9fe5ece26dcb03a3c0e26a5d3efc8a0e5f03044d))
* **deps-dev:** bump prettier from 2.3.2 to 2.4.1 ([9caa2bc](https://github.com/Fdawgs/node-unrtf/commit/9caa2bca8a7a14800d0a09e4571efa18eda747f5))
* **deps:** bump actions/setup-node from 2.4.0 to 2.4.1 ([12c1d2c](https://github.com/Fdawgs/node-unrtf/commit/12c1d2c58bcad26a938b54b30252506d0619a840))
* **deps:** bump file-type from 16.5.0 to 16.5.3 ([f7246ba](https://github.com/Fdawgs/node-unrtf/commit/f7246badb83771fb914d38dda4aea83f694502de))
* **deps:** bump GoogleCloudPlatform/release-please-action ([40836ed](https://github.com/Fdawgs/node-unrtf/commit/40836edde92a46300fbf670671ff60b065e8e9d6))
* **deps:** bump semver from 7.3.4 to 7.3.5 ([f15e0a5](https://github.com/Fdawgs/node-unrtf/commit/f15e0a59c54964bc358c57f2e5876306088910ed))
* **deps:** bump wagoid/commitlint-github-action from 4.1.1 to 4.1.5 ([4bba7ee](https://github.com/Fdawgs/node-unrtf/commit/4bba7eee336edf253f5247e7cf6c3640a563cff6))

### [2.0.2](https://github.com/Fdawgs/node-unrtf/compare/v2.0.1...v2.0.2) (2021-09-06)


### Documentation

* **readme:** grammar fix ([0c067cb](https://github.com/Fdawgs/node-unrtf/commit/0c067cb8161a00fc813ac7534a2d664e1b1d1b5a))


### Miscellaneous

* **.github:** use new YAML configured GitHub issue forms ([#113](https://github.com/Fdawgs/node-unrtf/issues/113)) ([1ebfbd5](https://github.com/Fdawgs/node-unrtf/commit/1ebfbd555e1f166f3420685064412ad398d2e642))
* **vscode:** disable red hat telemetry ([8b4caad](https://github.com/Fdawgs/node-unrtf/commit/8b4caad58580d02d1ffb2a125a6fac6f3c2ca101))
* **vscode:** remove user space config setting ([a86bb2f](https://github.com/Fdawgs/node-unrtf/commit/a86bb2f1b55bba6701198c37661e9933eba6f4ec))


### Continuous integration

* **ci:** disable homebrew analytics for macos builds ([#101](https://github.com/Fdawgs/node-unrtf/issues/101)) ([de448c3](https://github.com/Fdawgs/node-unrtf/commit/de448c3399267922cfc839332bc715c8d735158d))
* **ci:** replace workflow-run-cleanup-action with github concurrency ([#114](https://github.com/Fdawgs/node-unrtf/issues/114)) ([15f202c](https://github.com/Fdawgs/node-unrtf/commit/15f202c453ee90ef682e2f94f8e243b9b457fa3d))
* **link-check:** reduce frequency from daily to monthly ([#95](https://github.com/Fdawgs/node-unrtf/issues/95)) ([42f60b8](https://github.com/Fdawgs/node-unrtf/commit/42f60b88c3ea1cf2f017e2790584b2e11c186f77))


### Dependencies

* add .npmignore; reduce package size from 1.2MB to 117.2kB ([#115](https://github.com/Fdawgs/node-unrtf/issues/115)) ([0484881](https://github.com/Fdawgs/node-unrtf/commit/0484881bcebeda521c2ce5cb041aa4bdbe0686eb))
* **deps-dev:** bump @commitlint/cli from 12.1.4 to 13.1.0 ([0f0a344](https://github.com/Fdawgs/node-unrtf/commit/0f0a34435e49087ae65b2e1874088f9770df5f8d))
* **deps-dev:** bump @commitlint/config-conventional ([a195be4](https://github.com/Fdawgs/node-unrtf/commit/a195be4a48f48dab8ba9e59515783752adcf487b))
* **deps-dev:** bump eslint-plugin-jsdoc from 35.5.1 to 36.0.6 ([55eb347](https://github.com/Fdawgs/node-unrtf/commit/55eb34797c2eb9feff64fe65d00333f1ffbcb9e6))
* **deps-dev:** bump husky from 6.0.0 to 7.0.0 ([07b37d7](https://github.com/Fdawgs/node-unrtf/commit/07b37d77ea33b4cc81c53ff35507defa99cd36ee))
* **deps-dev:** bump prettier from 2.3.1 to 2.3.2 ([5d59e46](https://github.com/Fdawgs/node-unrtf/commit/5d59e4645d85bcb685996fdab1f4ccc75c2a394f))
* **deps:** bump actions/github-script from 4.0.2 to 4.1 ([c0c97ff](https://github.com/Fdawgs/node-unrtf/commit/c0c97ff78a8516fee912501eea5988932a30eb4e))
* **deps:** bump actions/setup-node from 2.1.5 to 2.2.0 ([fc0ff51](https://github.com/Fdawgs/node-unrtf/commit/fc0ff51c1de72a01660ce570a39761a1a490b1ec))
* **deps:** bump actions/setup-node from 2.2.0 to 2.3.0 ([09bbcd6](https://github.com/Fdawgs/node-unrtf/commit/09bbcd6f471aed68a8e9dffd1e74d9fe257c4dc3))
* **deps:** bump actions/setup-node from 2.3.0 to 2.4.0 ([261513f](https://github.com/Fdawgs/node-unrtf/commit/261513fd9d105ad12dbf7cac56a0c32ecd592267))
* **deps:** bump actions/upload-artifact from 2.2.3 to 2.2.4 ([00e3c19](https://github.com/Fdawgs/node-unrtf/commit/00e3c197e4c6440e887516ea6f050d1041ede7ee))
* **deps:** bump coverallsapp/github-action from 1.1.2 to 1.1.3 ([d6f6386](https://github.com/Fdawgs/node-unrtf/commit/d6f638646a647765f94f949176546e53155c9d2e))
* **deps:** bump GoogleCloudPlatform/release-please-action ([745c5d1](https://github.com/Fdawgs/node-unrtf/commit/745c5d12b313ed8482c225477188b474a5b3f3d1))
* **deps:** bump wagoid/commitlint-github-action from 3.1.4 to 4.1.1 ([b48d588](https://github.com/Fdawgs/node-unrtf/commit/b48d5889c202e71e2b0d5e6b044bdac230ae90a6))

### [2.0.1](https://github.com/Fdawgs/node-unrtf/compare/v2.0.0...v2.0.1) (2021-06-15)


### Bug fixes

* **index:** normalize file paths ([#89](https://github.com/Fdawgs/node-unrtf/issues/89)) ([9660cce](https://github.com/Fdawgs/node-unrtf/commit/9660ccea347e9153984658640781bd054cd02bae))
* **index:** throw error if file param is not rtf ([e3552bb](https://github.com/Fdawgs/node-unrtf/commit/e3552bb07ccfcf9a663cf633298eb312b8e2556c))


### Documentation

* **readme:** remove repetition ([08758ff](https://github.com/Fdawgs/node-unrtf/commit/08758ff6024c2ba251f29a4d03f40624ed80ba77))


### Miscellaneous

* **ci:** replace `node-version` key with shorter `node` ([#80](https://github.com/Fdawgs/node-unrtf/issues/80)) ([6beeef2](https://github.com/Fdawgs/node-unrtf/commit/6beeef254a394e1f0e29678a02a2a16920c57dfc))
* **workflows:** remove `stale.yml` ([e914a39](https://github.com/Fdawgs/node-unrtf/commit/e914a39b7c3f7fb5afd4a3d447d9f2083c52891b))


### Continuous integration

* **cd:** move perf optimizations and refactoring into same section ([7ab68ec](https://github.com/Fdawgs/node-unrtf/commit/7ab68ec5f9a18d930eb60c7c549361e02bb71335))
* fix key usage in `action/setup-node` ([d3ddf47](https://github.com/Fdawgs/node-unrtf/commit/d3ddf4712a99df2fef95122c9a3fde6180ebac9f))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 33.3.0 to 35.1.2 ([bb5f80e](https://github.com/Fdawgs/node-unrtf/commit/bb5f80ea3ba9379f05bc6b88b4b251f7be628e1f))
* **deps-dev:** bump jest from 26.6.3 to 27.0.3 ([ff94919](https://github.com/Fdawgs/node-unrtf/commit/ff94919ac60b2af179b69edf71f193491d7f8f04))
* **deps-dev:** bump prettier from 2.2.1 to 2.3.0 ([61478d5](https://github.com/Fdawgs/node-unrtf/commit/61478d5af073ab082f7f5a84f7c794eb1052f371))
* **deps-dev:** bump prettier from 2.3.0 to 2.3.1 ([538a5a4](https://github.com/Fdawgs/node-unrtf/commit/538a5a4a035f2611bc9c20f845481531a3d61bff))
* **deps:** bump GoogleCloudPlatform/release-please-action ([671e4e0](https://github.com/Fdawgs/node-unrtf/commit/671e4e0be73750e775fdb070db422ee77c247827))
* **deps:** bump wagoid/commitlint-github-action from 3.1.0 to 3.1.4 ([da1c9a1](https://github.com/Fdawgs/node-unrtf/commit/da1c9a1132704dde34e11c78b1524fdc0ff40c20))

## [2.0.0](https://github.com/Fdawgs/node-unrtf/compare/v1.1.1...v2.0.0) (2021-04-29)


### ⚠ BREAKING CHANGES

* remove support for nodejs v10, as it is EOL as of 2021-04-30

### Dependencies

* **deps:** bump actions/github-script from v3.1.0 to v3.1.1 ([eff3805](https://github.com/Fdawgs/node-unrtf/commit/eff380528a5ec8cdbd270a51824ac508be533557))


### Miscellaneous

* remove support for nodejs v10 ([2ae95c7](https://github.com/Fdawgs/node-unrtf/commit/2ae95c7d64e74019ce2f89dc89a5dfc9e53f4bb5))


### Documentation

* grammar and readability fixes ([35e9d0c](https://github.com/Fdawgs/node-unrtf/commit/35e9d0c88f8fcaed7c611251a8d27ed8dd97acee))


### Continuous integration

* add cleanup-run job ([37eda95](https://github.com/Fdawgs/node-unrtf/commit/37eda951536b2a4373b5c3bd68a62130969c33b7))
* add nodejs v16 to unit test matrix ([eac6377](https://github.com/Fdawgs/node-unrtf/commit/eac63778c91030edaee86a0a2f02b617bb5c3b4e))
* do not run coveralls steps/jobs on forks ([cb9a6f8](https://github.com/Fdawgs/node-unrtf/commit/cb9a6f8d2d8fcb23d3f03b52f0ea3bcfe9b4fa35))
* **link-check:** fix skip regex ([be010ea](https://github.com/Fdawgs/node-unrtf/commit/be010ea51fa1942045ab20425ed4aca60411bd9b))
* **link-check:** ignore links to lib binaries ([822a03a](https://github.com/Fdawgs/node-unrtf/commit/822a03a03784162ddaf81f2b2e90173f45ef525a))

### [1.1.1](https://github.com/Fdawgs/node-unrtf/compare/v1.1.0...v1.1.1) (2021-03-29)


### Miscellaneous

* **husky:** move doc step to pre-commit hook ([bbca3e5](https://github.com/Fdawgs/node-unrtf/commit/bbca3e5a4101e391bd8a48062cab48444e4637aa))
* **index:** make version param optional ([3476ad0](https://github.com/Fdawgs/node-unrtf/commit/3476ad06099abb55ab1895797016baaeeb513979))
* **prettierignore:** add `api.md` ([15ec35e](https://github.com/Fdawgs/node-unrtf/commit/15ec35ef6eb2263196cd133b0fac2aaa2a66d264))


### Dependencies

* **deps-dev:** bump husky from 4.3.8 to 6.0.0 ([3832a5b](https://github.com/Fdawgs/node-unrtf/commit/3832a5ba4fcb6d24ec8a76641e5000cb6926beec))
* **deps:** bump GoogleCloudPlatform/release-please-action ([387d34b](https://github.com/Fdawgs/node-unrtf/commit/387d34b4c41a1db2a29be1a382ba67d3531c7f89))
* **deps:** bump typoci/spellcheck-action from v0.3.0 to v0.4.0 ([13fd1b3](https://github.com/Fdawgs/node-unrtf/commit/13fd1b3c2dbcc59e500a8d5b2140c06ff2aa4def))


### Continuous integration

* **automerge:** move automerge job into new workflow ([1f6c64c](https://github.com/Fdawgs/node-unrtf/commit/1f6c64c39ef0f8a58472ce49f6054575ca88c37b))
* **ci:** ignore dependabot prs for commit message linting ([4db8bdc](https://github.com/Fdawgs/node-unrtf/commit/4db8bdc0459c247d3f7adb9baf803c95b808ca1a))
* **stale:** shorten workflow name ([84f86ae](https://github.com/Fdawgs/node-unrtf/commit/84f86aed55f86388f5a0aa10c6190fdd2b24793a))
* **workflows:** run only on push and pulls to main branch ([d993574](https://github.com/Fdawgs/node-unrtf/commit/d99357417fff0f073a4569f0f686761a2ddfd8e0))

## [1.1.0](https://github.com/Fdawgs/node-unrtf/compare/v1.0.8...v1.1.0) (2021-03-08)


### Features

* **index:** add binary version checking for options ([3e91223](https://github.com/Fdawgs/node-unrtf/commit/3e91223aba763abd8be5d3775f2c0443cd24423b))


### Bug fixes

* **index:** correct misspelling of `received` in error string ([cda01e6](https://github.com/Fdawgs/node-unrtf/commit/cda01e6f1a2e460dd9b86b9cd9438e2f3c5936f0))


### Continuous integration

* **workflows:** move release steps into `cd` workflow ([#45](https://github.com/Fdawgs/node-unrtf/issues/45)) ([7713848](https://github.com/Fdawgs/node-unrtf/commit/7713848037ff066bca84665cc358328ba8681cca))


### Documentation

* **changelog:** add compare links ([8b51b55](https://github.com/Fdawgs/node-unrtf/commit/8b51b5529f3bc923987492ab9277750f674fe7a6))
* **changelog:** add h1 header ([ec72246](https://github.com/Fdawgs/node-unrtf/commit/ec7224681d629ce5d45faf526553a685d29aaf64))


### Miscellaneous

* **package:** move prettier config to separate file ([8a20a35](https://github.com/Fdawgs/node-unrtf/commit/8a20a35bb4582d2da9a121186885b83ab1e10dd4))
* **prettier:** create .prettierignore ([0fbe516](https://github.com/Fdawgs/node-unrtf/commit/0fbe5160ba88664869789cafb2db530734391fec))
* **workflows:** rename ci and perf sections ([7674345](https://github.com/Fdawgs/node-unrtf/commit/7674345fd82c737413322164232d68f31874dbe0))


### Dependencies

* **deps:** add semver dependency ([a1e8467](https://github.com/Fdawgs/node-unrtf/commit/a1e8467f2b8768380fadfc504f920161b4fd90f1))
* **deps:** bump actions/stale from v3.0.17 to v3.0.18 ([0e95561](https://github.com/Fdawgs/node-unrtf/commit/0e95561bf0d796e4266037008ea394c0fcf39977))
* **deps:** bump fastify/github-action-merge-dependabot ([733272f](https://github.com/Fdawgs/node-unrtf/commit/733272f0e5d3288fbed109847f09a4a653dcfe3f))
* **deps:** bump GoogleCloudPlatform/release-please-action ([f5bfb06](https://github.com/Fdawgs/node-unrtf/commit/f5bfb0655c1a78027ef31045b8cc685d1dfc693b))
* **deps:** bump wagoid/commitlint-github-action from v3.0.1 to v3.0.6 ([fa23fec](https://github.com/Fdawgs/node-unrtf/commit/fa23fec20eab9aafad9e5e17eb2b19f8b16011f6))

### [1.0.8](https://github.com/Fdawgs/node-unrtf/compare/v1.0.7...v1.0.8) (2021-03-02)

### Documentation

* bump coc from v1.4.0 to v2.0.0 ([3f1a367](https://github.com/Fdawgs/node-unrtf/commit/3f1a36790321cd9d95ef4c7d3cc4d846b40cac1f))
* **contributing:** add documentation style ([17b373b](https://github.com/Fdawgs/node-unrtf/commit/17b373b54dd75f2b72f1c2585ef9025fb9f4254d))
* **readme:** fix broken link ([a0d360f](https://github.com/Fdawgs/node-unrtf/commit/a0d360fa8c7e495b6cc5164a2417d74b532098cd))
* **readme:** grammar ([68aba60](https://github.com/Fdawgs/node-unrtf/commit/68aba60fe2400dbab646bca4a0c7c0018a9a1278))
* **readme:** revamp intro section ([86edaa3](https://github.com/Fdawgs/node-unrtf/commit/86edaa3fd33309f4d684bf92a09022cda5bd4380))
* **readme:** shorten links ([bb80196](https://github.com/Fdawgs/node-unrtf/commit/bb801961d63b4de98c1662185822a3f70e02ba2c))

### Dependencies

* **dependabot:** set commit message prefix; lower pull limit ([26cac51](https://github.com/Fdawgs/node-unrtf/commit/26cac5147257b317c053e930284d4e4c34be8673))
* **deps-dev:** add husky for git hook handling ([537497c](https://github.com/Fdawgs/node-unrtf/commit/537497c3bc112f2b2e3d6c9467235ea94c2cb8c1))
* **deps-dev:** bump @commitlint/cli from 11.0.0 to 12.0.1 ([#41](https://github.com/Fdawgs/node-unrtf/issues/41)) ([9b2d9b4](https://github.com/Fdawgs/node-unrtf/commit/9b2d9b4bd5289caf24a9f988ea03b2b4719244f2))
* **deps-dev:** bump @commitlint/config-conventional ([e1b6506](https://github.com/Fdawgs/node-unrtf/commit/e1b6506710a5d30b539cdf4cde15161251e325b7))
* **deps-dev:** bump eslint-config-prettier from 7.2.0 to 8.1.0 ([cd7a091](https://github.com/Fdawgs/node-unrtf/commit/cd7a091622e740040a6915b0ee5b23f3b6be5c74))
* **deps-dev:** bump eslint-plugin-jsdoc from 31.6.1 to 32.0.1 ([#37](https://github.com/Fdawgs/node-unrtf/issues/37)) ([5fa4c1f](https://github.com/Fdawgs/node-unrtf/commit/5fa4c1fb81d1cd990703fbe2d601ad9801a65824))
* **deps-dev:** bump jsdoc-to-markdown from 6.0.1 to 7.0.0 ([#40](https://github.com/Fdawgs/node-unrtf/issues/40)) ([00306f0](https://github.com/Fdawgs/node-unrtf/commit/00306f0728251860f15ac9bb8b8e785d414663fc))
* **deps-dev:** pin husky major version ([994c53b](https://github.com/Fdawgs/node-unrtf/commit/994c53b8ad4e5211998723c4293edb861b45bcad))
* **deps-dev:** remove coveralls, replaced by github action ([d602daf](https://github.com/Fdawgs/node-unrtf/commit/d602daf8258389f54be800520989fdfd740e438a))
* **deps-dev:** remove jsinspect ([ddb0e60](https://github.com/Fdawgs/node-unrtf/commit/ddb0e60a40c68d08f02f4ebb763d2f884d6ca42b))
* **deps:** bump wagoid/commitlint-github-action from v2.0.3 to v2.2.3 ([eab0134](https://github.com/Fdawgs/node-unrtf/commit/eab01346c6e655a56ad14796a69511e673070f93))
* **deps:** bump wagoid/commitlint-github-action from v2.2.3 to v3.0.1 ([4226100](https://github.com/Fdawgs/node-unrtf/commit/42261005af9c3df7f94b1cf33e7aa698f4de505c))
* **deps:** specify minor and hotfix versions ([57bcbd1](https://github.com/Fdawgs/node-unrtf/commit/57bcbd19e299a461c46f6db48c166137be114675))

### Miscellaneous

* add commit-lint job ([b2842b4](https://github.com/Fdawgs/node-unrtf/commit/b2842b4601d3a9a63feb90cccafa711041688871))
* add commitlint husky `commit-msg` hook ([47b8438](https://github.com/Fdawgs/node-unrtf/commit/47b843828fc76dc6d2fdf08e3d82eaa6b475332a))
* add link check workflow ([d56c153](https://github.com/Fdawgs/node-unrtf/commit/d56c1539a97831d47bfd89058c66ae9989331727))
* add pull request template ([41593f5](https://github.com/Fdawgs/node-unrtf/commit/41593f5b02a9a5147fd020d64844798653d1a382))
* automate release and changelog generation ([84113f7](https://github.com/Fdawgs/node-unrtf/commit/84113f718879320e4a7b3b4fec791c7d25640a88))
* capitalise headings correctly ([3c302f8](https://github.com/Fdawgs/node-unrtf/commit/3c302f890cf60e07d66be9ce81d816272832d936))
* **ci:** capitalise jobs and job step names ([e4fb8d1](https://github.com/Fdawgs/node-unrtf/commit/e4fb8d1be1f20fd56c91ca46ce25746958a353d2))
* **codeql:** remove autobuild action ([27d7e86](https://github.com/Fdawgs/node-unrtf/commit/27d7e8665e868aed22ee1649a8d9a4c14d08e60e))
* **dependabot:** ignore husky updates ([234088c](https://github.com/Fdawgs/node-unrtf/commit/234088cf875367eb36a7de71e00d67526b776021))
* disable long running homebrew cleanup tasks ([812de48](https://github.com/Fdawgs/node-unrtf/commit/812de481769a4697f0b72bccd55cf28cce9c08b0))
* **github-actions:** set `flag-name` for parallel coverage tests ([7dccf38](https://github.com/Fdawgs/node-unrtf/commit/7dccf38f1049a7b13aa41ba61ad79d9d17353a10))
* **github-actions:** set semver for coverallsapp ([723b833](https://github.com/Fdawgs/node-unrtf/commit/723b83368798e4528674570e2d197211c62eb256))
* ignore test wmf file ([550287f](https://github.com/Fdawgs/node-unrtf/commit/550287f72b0fcefa664fccb46dc387e33f3612d7))
* **jest:** enable resetmocks option ([c7bb98c](https://github.com/Fdawgs/node-unrtf/commit/c7bb98cfd60d72410594ead53eb24421efe6f6bc))
* **linkcheck:** extend ignored urls ([c8b7162](https://github.com/Fdawgs/node-unrtf/commit/c8b716299a2f72b21248ccb40ee837df43e85be5))
* **lint-check:** compress patterns ([5f1d76c](https://github.com/Fdawgs/node-unrtf/commit/5f1d76cfee0fbf144b878df489fef6c4cf677a0c))
* **readme:** add linebreaks between badges ([07af20d](https://github.com/Fdawgs/node-unrtf/commit/07af20d688a150de69813c9b61d8dbf596a32368))
* **readme:** capitalise headings correctly ([ef91208](https://github.com/Fdawgs/node-unrtf/commit/ef9120895eaa5af667d2d35734720ba209f900ba))
* **readme:** prettier badge shape ([ea67e5c](https://github.com/Fdawgs/node-unrtf/commit/ea67e5c457c27babe56496dff7ab9f87afc1520f))
* remove cache actions as they use lock file ([c8ca340](https://github.com/Fdawgs/node-unrtf/commit/c8ca34057f5e91cf5d651e19d4074b2a33b6f034))
* replace stalebot with github action ([2d9339b](https://github.com/Fdawgs/node-unrtf/commit/2d9339b3802e9457f3b030bf3086ff21bfe04ff5))
* replace typo ci app with action ([8c5f4f9](https://github.com/Fdawgs/node-unrtf/commit/8c5f4f9e3e78effd7cd60430d703e1de87b0a4db))
* revert linux os to `ubuntu-latest` from `20.04` ([cfe6b9f](https://github.com/Fdawgs/node-unrtf/commit/cfe6b9fc4faa56eddc197a99f9b508d3561f19ef))
* **scripts:** rename `jest-coverage` to `jest:coverage` ([093e365](https://github.com/Fdawgs/node-unrtf/commit/093e365df746efe86fb6114b155ff9db52a485c4))
* shorten husky pre-push script ([5e03f99](https://github.com/Fdawgs/node-unrtf/commit/5e03f99a37f166b0f36e7ea59d12415ef680ac26))
* stop excess coverage files being generated ([15be36a](https://github.com/Fdawgs/node-unrtf/commit/15be36ae88c9b67f902e215a29ea51688eebe5d9))
* **tests:** use apa header style for describe name params ([78eef74](https://github.com/Fdawgs/node-unrtf/commit/78eef74fe7fbe16f8b11b57592e804a02697f35b))
* **vscode:** add `redhat.vscode-yaml` as recommended extension ([aeb9a16](https://github.com/Fdawgs/node-unrtf/commit/aeb9a168ad12e66f793a43bb0b6e1a035e10158e))
* **vscode:** add `updateImportsOnFileMove` setting ([bcf3342](https://github.com/Fdawgs/node-unrtf/commit/bcf3342f05f202ed4d98a434e284ba9676072879))
* **vscode:** add workspace settings and extensions ([0704d1d](https://github.com/Fdawgs/node-unrtf/commit/0704d1d4e0bff12e6ed229268ad93408df6a0927))
* **vscode:** remove conflicting prettier ext setting ([cb2fe3d](https://github.com/Fdawgs/node-unrtf/commit/cb2fe3db555bb31af20790fba9b014ad46f17eaa))
* **workflows:** fix release types to account for bots ([477dae4](https://github.com/Fdawgs/node-unrtf/commit/477dae4e6485ff6147595c4427557ca7d0432d95))
* **workflows:** rename spellcheck workflow ([f8a2de7](https://github.com/Fdawgs/node-unrtf/commit/f8a2de727acff05772f604c3a9f3f1e9b7d219e3))
* **workflows:** tidy node-version syntax ([5ff6186](https://github.com/Fdawgs/node-unrtf/commit/5ff61868b093b3d6df9c9f45d5fc13d4c31f638b))

### [1.0.7](https://github.com/Fdawgs/node-unrtf/compare/v1.0.6...v1.0.7) (2021-01-18)

* build: add typoci config file ([673d667](https://github.com/Fdawgs/node-unrtf/commit/673d667))
* build: remove `yarn` as package manager, revert to `npm` ([92bfa05](https://github.com/Fdawgs/node-unrtf/commit/92bfa05))
* build(deps-dev): bump eslint-plugin-jsdoc from 30.7.13 to 31.0.7 (#26) ([3a385b0](https://github.com/Fdawgs/node-unrtf/commit/3a385b0)), closes [#26](https://github.com/Fdawgs/node-unrtf/issues/26)
* fix: remove lockfile ([3f1f06f](https://github.com/Fdawgs/node-unrtf/commit/3f1f06f))
* fix: script calls ([92c1d12](https://github.com/Fdawgs/node-unrtf/commit/92c1d12))
* ci: ignore scripts on publish ([51bbc50](https://github.com/Fdawgs/node-unrtf/commit/51bbc50))
* ci: remove redundant javascript dictionary ([5bb970f](https://github.com/Fdawgs/node-unrtf/commit/5bb970f))
* ci(typo-ci): add `ydh` to list of excluded words ([ce0dd7d](https://github.com/Fdawgs/node-unrtf/commit/ce0dd7d))
* chore(package): add homepage and bug urls ([0296e85](https://github.com/Fdawgs/node-unrtf/commit/0296e85))
* docs: update contact email ([b1ab606](https://github.com/Fdawgs/node-unrtf/commit/b1ab606))
* docs(contributing): update yarn link ([e1c4bc0](https://github.com/Fdawgs/node-unrtf/commit/e1c4bc0))

### [1.0.6](https://github.com/Fdawgs/node-unrtf/compare/v1.0.5...v1.0.6) (2021-01-03)

* build(deps-dev): bump eslint from 7.16.0 to 7.17.0 (#23) ([906057f](https://github.com/Fdawgs/node-unrtf/commit/906057f)), closes [#23](https://github.com/Fdawgs/node-unrtf/issues/23)
* build(deps-dev): bump eslint-plugin-jsdoc from 30.7.9 to 30.7.13 (#22) ([3a6a54c](https://github.com/Fdawgs/node-unrtf/commit/3a6a54c)), closes [#22](https://github.com/Fdawgs/node-unrtf/issues/22)
* build(deps-dev): remove cross-env ([3fb81e4](https://github.com/Fdawgs/node-unrtf/commit/3fb81e4))
* ci: refactor `codeql-analysis.yml` ([ed2cf30](https://github.com/Fdawgs/node-unrtf/commit/ed2cf30))
* ci: use yarn cache of node dependencies if present ([fe7171a](https://github.com/Fdawgs/node-unrtf/commit/fe7171a))
* ci(codeql): specify more query suites ([0bf1d99](https://github.com/Fdawgs/node-unrtf/commit/0bf1d99))
* chore: remove old .env files from gitignore ([1fcc8dd](https://github.com/Fdawgs/node-unrtf/commit/1fcc8dd))
* docs(readme): update examples ([22d5943](https://github.com/Fdawgs/node-unrtf/commit/22d5943))
* test(index): function with no options param passed ([72c97af](https://github.com/Fdawgs/node-unrtf/commit/72c97af))
* refactor(index): remove unused default branch ([aee6c76](https://github.com/Fdawgs/node-unrtf/commit/aee6c76))
* style(ci): tidy job names ([78bc55e](https://github.com/Fdawgs/node-unrtf/commit/78bc55e))

### [1.0.5](https://github.com/Fdawgs/node-unrtf/compare/v1.0.4...v1.0.5) (2020-12-28)

* build: update github-actions with dependabot ([e905020](https://github.com/Fdawgs/node-unrtf/commit/e905020))
* build(deps-dev): bump cross-env from 7.0.2 to 7.0.3 ([3c99ec3](https://github.com/Fdawgs/node-unrtf/commit/3c99ec3))
* build(deps-dev): bump eslint from 7.14.0 to 7.16.0 ([96b903f](https://github.com/Fdawgs/node-unrtf/commit/96b903f))
* build(deps-dev): bump eslint-config-prettier from 6.15.0 to 7.1.0 ([a9c02e6](https://github.com/Fdawgs/node-unrtf/commit/a9c02e6))
* build(deps-dev): bump eslint-plugin-jsdoc from 30.7.8 to 30.7.9 (#14) ([ff9c9d2](https://github.com/Fdawgs/node-unrtf/commit/ff9c9d2)), closes [#14](https://github.com/Fdawgs/node-unrtf/issues/14)
* build(deps-dev): bump typescript from 4.1.2 to 4.1.3 (#16) ([372bd4b](https://github.com/Fdawgs/node-unrtf/commit/372bd4b)), closes [#16](https://github.com/Fdawgs/node-unrtf/issues/16)
* build(deps-dev): remove eslint-plugin-json ([ae41058](https://github.com/Fdawgs/node-unrtf/commit/ae41058))
* build(deps): bump fastify/github-action-merge-dependabot (#13) ([dbda5ae](https://github.com/Fdawgs/node-unrtf/commit/dbda5ae)), closes [#13](https://github.com/Fdawgs/node-unrtf/issues/13)
* build(typescript): enable strict option ([4c5344a](https://github.com/Fdawgs/node-unrtf/commit/4c5344a))
* docs(contributing): update prettier script ([c2df110](https://github.com/Fdawgs/node-unrtf/commit/c2df110))
* docs(readme): remove abbreviation ([cca9eb4](https://github.com/Fdawgs/node-unrtf/commit/cca9eb4))
* ci: add linting job; expand scope of jobs ([2abbfc1](https://github.com/Fdawgs/node-unrtf/commit/2abbfc1))
* ci: automatically merge dependabot pull requests on pass build stage ([3c7b40a](https://github.com/Fdawgs/node-unrtf/commit/3c7b40a))
* ci: bump actions/setup-node from v1 to v2 ([3ec3d8b](https://github.com/Fdawgs/node-unrtf/commit/3ec3d8b))
* ci: freeze yarn lockfile on publish ([65135d6](https://github.com/Fdawgs/node-unrtf/commit/65135d6))
* ci: merge unit test jobs ([4fe02c8](https://github.com/Fdawgs/node-unrtf/commit/4fe02c8))
* ci: move dependency installs to correct step ([5bf2bd9](https://github.com/Fdawgs/node-unrtf/commit/5bf2bd9))
* ci: require lint job on automerge ([ab41541](https://github.com/Fdawgs/node-unrtf/commit/ab41541))
* style: use default prettier options for trailing commas and quotes ([c4f9fad](https://github.com/Fdawgs/node-unrtf/commit/c4f9fad))
* fix(scripts): test script ([b5a59e0](https://github.com/Fdawgs/node-unrtf/commit/b5a59e0))
* chore: add stale confg ([777a58e](https://github.com/Fdawgs/node-unrtf/commit/777a58e))
* chore(scripts): rename test scripts ([e0cee9f](https://github.com/Fdawgs/node-unrtf/commit/e0cee9f))

### [1.0.4](https://github.com/Fdawgs/node-unrtf/compare/v1.0.3...v1.0.4) (2020-12-01)

* build(deps-dev): bump dev dependencies ([25a4bb4](https://github.com/Fdawgs/node-unrtf/commit/25a4bb4))
* chore: add security.md ([821352e](https://github.com/Fdawgs/node-unrtf/commit/821352e))
* ci: add cd action to publish to npm ([709bef7](https://github.com/Fdawgs/node-unrtf/commit/709bef7))
* ci: replace travis-ci with github actions ([70d23d8](https://github.com/Fdawgs/node-unrtf/commit/70d23d8))

### [1.0.3](https://github.com/Fdawgs/node-unrtf/compare/v1.0.2...v1.0.3) (2020-11-10)

* build(deps-dev): bump dev dependencies ([2e96ea0](https://github.com/Fdawgs/node-unrtf/commit/2e96ea0))
* fix(index): return promise objects ([863d9f7](https://github.com/Fdawgs/node-unrtf/commit/863d9f7))
* docs(index): correct return jsdoc tag for parseoptions function ([59bb581](https://github.com/Fdawgs/node-unrtf/commit/59bb581))
* refactor(index): concat invalid args provided into error object ([dd1084e](https://github.com/Fdawgs/node-unrtf/commit/dd1084e))
* chore(index): rename const to reflect functionality ([a0624e9](https://github.com/Fdawgs/node-unrtf/commit/a0624e9))

### [1.0.2](https://github.com/Fdawgs/node-unrtf/compare/v1.0.1...v1.0.2) (2020-10-29)

* build(deps-dev): bump dev dependencies ([79e05f9](https://github.com/Fdawgs/node-unrtf/commit/79e05f9))
* docs: grammar and spelling fixes ([f5fb9e3](https://github.com/Fdawgs/node-unrtf/commit/f5fb9e3))
* fix(index): check file exists before attempting to parse ([41daf30](https://github.com/Fdawgs/node-unrtf/commit/41daf30))

### [1.0.1](https://github.com/Fdawgs/node-unrtf/compare/v1.0.0...v1.0.1) (2020-10-27)

* build(deps-dev): bump dev dependencies ([cf5cd8b](https://github.com/Fdawgs/node-unrtf/commit/cf5cd8b))
* ci(travis): add npm deploy stage ([d194055](https://github.com/Fdawgs/node-unrtf/commit/d194055))
* fix(index): catch empty file vars before unrtf parses them ([789afbd](https://github.com/Fdawgs/node-unrtf/commit/789afbd))

## [1.0.0](https://github.com/Fdawgs/node-unrtf/compare/v0.0.2...v1.0.0) (2020-10-26)

* build(deps-dev): bump dev dependencies ([dd3f926](https://github.com/Fdawgs/node-unrtf/commit/dd3f926))
* refactor(index): move optional option param for convert function to end ([02b95a9](https://github.com/Fdawgs/node-unrtf/commit/02b95a9))
* chore(scripts): do not lint ts and tsx files ([f40b335](https://github.com/Fdawgs/node-unrtf/commit/f40b335))
* feat(index): add typescript definitions ([e2203a6](https://github.com/Fdawgs/node-unrtf/commit/e2203a6))

### BREAKING CHANGE

* `usage of convert(option, file) should be replaced with convert(file, option)`

### 0.0.2 (2020-10-21)

* docs: add api docs and examples ([59f1fc3](https://github.com/Fdawgs/node-unrtf/commit/59f1fc3))
* docs(index): add note to jsdoc tags about select options errors ([d1d9964](https://github.com/Fdawgs/node-unrtf/commit/d1d9964))
* docs(index): clarify on required unrtf binary version ([2c74019](https://github.com/Fdawgs/node-unrtf/commit/2c74019))
* docs(readme): add osx usage instructions ([2b64327](https://github.com/Fdawgs/node-unrtf/commit/2b64327))
* tests: add more complex test rtf file ([20ed0c6](https://github.com/Fdawgs/node-unrtf/commit/20ed0c6))
* tests(index): extend tests ([9386e78](https://github.com/Fdawgs/node-unrtf/commit/9386e78))
* tests(index): remove broken vt test ([a7ac427](https://github.com/Fdawgs/node-unrtf/commit/a7ac427))
* build(deps-dev): add is-html to test html responses ([c03e25d](https://github.com/Fdawgs/node-unrtf/commit/c03e25d))
* ci(travis): add osx test stage ([53f9c34](https://github.com/Fdawgs/node-unrtf/commit/53f9c34))
* chore: move travis file to root ([6158b29](https://github.com/Fdawgs/node-unrtf/commit/6158b29))
* feat(index): add support for output for ps and wpml formats ([df88f2b](https://github.com/Fdawgs/node-unrtf/commit/df88f2b))
