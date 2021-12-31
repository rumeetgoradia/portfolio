import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { Layout } from "@components/Layout"
import type { NextPage } from "next"
import NextLink from "next/link"

const _404Page: NextPage = () => {
	return (
		<Layout title="404">
			<Box>
				<Text as="h1" textStyle="header">
					404 &ndash; There&apos;s nothing here.
				</Text>
				<Text textStyle="paragraph">Maybe there&apos;s a typo in the URL?</Text>
			</Box>
			<Flex w="full" align="center" justify="center">
				<NextLink href="/" passHref>
					<Button as="a" variant="outline" size="md">
						Return Home
					</Button>
				</NextLink>
			</Flex>
		</Layout>
	)
}

export default _404Page
