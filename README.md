# Monit Space 📈
## Covid-19 Monitoring Application

<img src="https://user-images.githubusercontent.com/46489446/149169674-9838e704-1cfc-46b7-ac4a-495dd5597187.png" width="350" title="Cover Image" align="right">

## Git Flow
**[참고]**
- https://techblog.woowahan.com/2553/

## Git branch
- <code>main</code> : 제품으로 출시될 수 있는 브랜치
- <code>develop</code> : 다음 출시 버전을 개발하는 브랜치
- <code>feature</code> : 기능을 개발하는 브랜치\
-> <code>feature/sign</code>와 같이 <code>브랜치/기능</code> 형태로 브랜치를 생성한다.

## Commit Convention
- <a href="https://gist.github.com/stephenparish/9941e89d80e2bc58a153">AngularJS Git Commit Message Conventions</a>을 따른다.
- <code>feat</code> : 새로운 기능 개발
- <code>fix</code> : 버그 수정
- <code>refactor</code> : 기능 변경이 없는 코드 수정
- <code>test</code> : 테스트 코드 작성 및 수정
- <code>docs</code> : 문서 작성 및 수정
- <code>build</code> : 빌드 파일 작성 및 수정
- <code>style</code> : 스타일 변경(reformat, indent)
- <code>chore</code> : 단순한 작업


## PR Rules
- develop -> main : merge commit
- feature -> develop : squash and merge
